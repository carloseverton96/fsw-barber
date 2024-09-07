import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"
import Link from "next/link"
import SidebarSheet from "./sidebar-sheet"


const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        
        <Sheet>
          <SheetTrigger>
            <Button  size="icon" variant="outline" asChild>
              <MenuIcon />
            </Button>
          </SheetTrigger>
        <SidebarSheet />
      </Sheet>
        

      </CardContent>
    </Card>
  )
}

export default Header
