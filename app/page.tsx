import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import Link from "next/link"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  //chamar seu banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  

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

       {/* BUSCA RÁPIDA */}
       <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
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
      <BookingItem />

    {/* Recomendados */}
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares 
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
    </div>

  </div>
  )
}

export default Home