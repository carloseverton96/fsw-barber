import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

const SidebarSheet = () => {
    return ( 
        
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>


          <div className="flex items-center justify-between gap-3 py-5 border-b border-solid">
            <h2 className="text-lg font-bold">Olá, Faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta do google
                    </DialogDescription>
                </DialogHeader>
                <Button variant="outline" className="gap-1 font-bold">
                  <Image alt="Google" src="/google.png" width={18} height={18} />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
            
            
            {/* Avatar */}
            {/* <Avatar>
              <AvatarImage>
              
              </AvatarImage>
            </Avatar>
            <div>
              <p className="font-bold">Felipe Rocha</p>
              <p className="text-xs">Felipe@gmail.com</p>
            </div> */}
          </div>

          <div className="flex flex-col gap-2 border-b border-solid py-5">
            <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
            </SheetClose>
            <Button className="justify-start gap-2" variant="ghost">
              <CalendarIcon size={18} />
              Agendamentos
            </Button>
          </div>

          <div className="flex flex-col gap-2 border-b border-solid py-5">
            {quickSearchOptions.map((option)=>(
              <Button
                key={option.title}
                className="justify-start gap-2"
                variant="ghost"
              >
              <Image
                alt={option.title}
                src={option.imageUrl}
                height={18}
                width={18}
              />
              {option.title}
              </Button>
          ))}
        </div>


          <div className="flex flex-col gap-2 py-5">
          <Button variant="ghost"className="justify-start gap-2">
            <LogOutIcon size={18}>
              Sair da conta
              </LogOutIcon>
          </Button>
          </div>

        </SheetContent>
      
     );
}
 
export default SidebarSheet;