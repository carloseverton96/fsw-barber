import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const Home = () => {
  return (
  <div>
    <Header />
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Felipe</h2>
      <p>Segunda-feira, 05 de agosto.</p>

      {/* Busca */}
      <div className="mt-6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..."/>
        <Button>
          <SearchIcon />
        </Button>
      </div>

      {/* Imagem */}
      <div className="relative mt-6 h-[150px] w-full">
        <Image 
        alt="Agende nos melhores com FSW Barber"
        src="/banner-01.png"
        fill
        className="rounded-xl object-cover"
        />
      </div>

      {/* Agendamento */}
      <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          {/* esquerda */}
          <div className="flexflex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">confirmado</Badge>
          <h3 className="font-semibold">Corte de cabelo</h3>
          
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
            </Avatar>
            <p className="text-sm">Barbearia FSW</p>
          </div>
          </div>
          {/* direita */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
          
        </CardContent>
      </Card>
    </div>

  </div>
  )
}

export default Home