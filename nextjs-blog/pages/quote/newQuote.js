
export default function Home(req){
    const invoice = req.body;
    return (
    <div>
        {invoice}
    </div>
    );
}