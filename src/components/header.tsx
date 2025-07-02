import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar} from "@heroui/react";
import { Input } from "@heroui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { auth, signIn, signOut  } from "@/auth";
import * as section from "@/section";



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

export default async function Header() {
    const session = await auth();
    let authContent = null;
    if (session?.user) {
        authContent = (
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Avatar 
                        src={session.user.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d"} 
                        className="cursor-pointer"
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
    <Navbar className="border-b-1 border-gray-200">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">DISCUSS</p>
      </NavbarBrand>


      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {authContent}
      </NavbarContent>
    </Navbar>
  );
}
