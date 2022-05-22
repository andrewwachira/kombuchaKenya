import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function getProducts(req,res){
   try{
        const herbalTeas = await prisma.products.findMany(
            {
                where: {
                    flavor_type : 'Herbal Tea'
                }
            }
        )
        const dairyKefir = await prisma.products.findMany(
            {
                where: {
                    flavor_type : 'Dairy Kefir'
                }
            }
        )
        const nonDairyKefir = await prisma.products.findMany(
            {
                where: {
                    flavor_type : 'Non Dairy Kefir'
                }
            }
        );
        const fruitInfused = await prisma.products.findMany(
            {
                where: {
                    flavor_type : 'Fruit Infused'
                }
            }
        )
       

        res.status(200).json([herbalTeas,dairyKefir,nonDairyKefir,fruitInfused])
    }catch(e){

        res.status(404).json(e.statusText);
        console.error(e.message);
    }
}