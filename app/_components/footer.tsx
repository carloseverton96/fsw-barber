import { Card, CardContent } from "./ui/card";

const Footer = () => {
    return ( 
        <footer>
            <Card>
              <CardContent className="px-5 py-6">
                <p className="text-sm text-grey-400">
                  2024 copyright <span className="font-bold"> FSW Barber</span>
                </p>
              </CardContent>
            </Card>
        </footer>
     );
}
 
export default Footer;