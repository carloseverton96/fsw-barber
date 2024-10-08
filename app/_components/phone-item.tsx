"use client";

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner";

interface PhoneItemProps {
    phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) =>{
    const handleCopyPhoneClick = (Phone: string) => {
        navigator.clipboard.writeText(phone)
        toast.success("Telefone copiado com sucesso!")
    }
    return (
        <div className="flex justify-between key={phone}">
                    {/* esquerda */}
                    <div className="flex items-center">
                        <SmartphoneIcon />
                        <p className="text-sm">{phone}</p>
                    </div>
                    {/* Direita */}
                    <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopyPhoneClick(phone)}
                        >
                    Copiar                    
                    </Button>
                </div> 
    )
}

export default PhoneItem