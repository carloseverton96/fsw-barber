import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, Link, MenuIcon } from "lucide-react";
import Image from "next/image";


interface BarbershopsPageProps {
    params: {
        id: string
    }
}


const BarbershopsPage = async ({ params }: BarbershopsPageProps) => {
    // chamar o meu banco de dados
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
    })
    return (
     <div>
        {/* IMAGEM */}
        <div>
            <Image 
            alt={barbershop.name}
            src={barbershop?.imageUrl} 
            fill 
            className="object-cover"  
            />

            <Button 
            size="icon" 
            variant="secondary" 
            className="absolute top-4 left-4 top-4" 
            >
                
                 <Link href="/">
                 <ChevronLeftIcon />
                </Link>
            </Button>

            <Button 
            size="icon" 
            variant="secondary" 
            className="absolute top-4 right-4 top-4" 
            >
                <MenuIcon />
            </Button>



        </div>
     </div>   
    ) 
}

export default BarbershopsPage;