import Image from "next/image";
import { Card,CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react"

const Header = () => {
    return ( 
        <Card>
            <CardContent>
                <Image alt="FSW BARBER" src="/logo.png" height={18} width={120} />
                <Button size="icon" variant="outline" >
                    <MenuIcon />
                </Button>
            
            </CardContent>
        </Card>
     );
}
 
export default Header;