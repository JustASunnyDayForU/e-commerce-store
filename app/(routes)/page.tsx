import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products ";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const product = await getProducts({isFeatured: true});
    const billboard = await getBillboard("65823081-f18e-4d9e-a7be-7f2c46d40a0d");

    return ( 
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList  title ="Featured Products" items={product}/>
            </div>
        </div>
    </Container>
     );
}
 
export default HomePage;