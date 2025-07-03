'use client'
import {NavbarItem,  Button, Avatar} from "@heroui/react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import * as section from "@/section";
import { useSession } from "next-auth/react"
import Spinner from "@/components/spinner"



export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default  function HeaderAuth() {
    const { data: session, status } =  useSession();
    let authContent = null;
    if (status == 'loading'){
        authContent = <Spinner />
    }else if (session?.user) {
        authContent = (
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Avatar 
                        src={session.user.image || undefined} 
                        size="md"
                        className="cursor-pointer"
                        showFallback
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-4 py-3">
                        <div className="text-small font-bold">{session.user.name}</div>
                        <div className="text-tiny text-gray-500">{session.user.email}</div>
                        <div className="mt-2">
                            <form
                                action={section.signOut}
                            >
                                <Button type='submit' color="danger" variant="flat" size="sm">
                                    Sign Out
                                </Button>
                            </form>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        )
    }else{
        authContent = (
            <>
                <NavbarItem className="hidden lg:flex">
                <form
                    action={section.signIn}>
                    <Button  type='submit'  color="primary" href="#" variant="bordered">
                        Sign In
                    </Button>
                </form>
                </NavbarItem>

                <NavbarItem>    
                <form
                    action={section.signIn}>
                    <Button type='submit' color="primary" href="#" >
                        Sign Up
                    </Button>
                </form>
                </NavbarItem>
            </>
        )
    }

    
  return (
    authContent
  );
}
