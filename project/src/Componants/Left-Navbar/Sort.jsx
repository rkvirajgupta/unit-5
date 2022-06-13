import './Sort.css'

export const Sort = ({ getdata, setproduct })=>{

const handleChange = async (e)=>{
    console.log(e.target.value)
    let fetchedData = await getdata();
    console.log(fetchedData)

    if(e.target.value=="PLH") {
         let sorted =  fetchedData.sort((a, b) => {
            return a.currentSku.listPrice - b.currentSku.listPrice;
         });
        //  console.log(sorted);
         let newData = [...sorted];
         setproduct(newData);
      }
      else if(e.target.value=="PHL"){
        let sorted = fetchedData.sort((a, b) => {
            return b.currentSku.listPrice - a.currentSku.listPrice;
         });
        //  console.log(sorted);
         let newData = [...sorted];
         setproduct(newData);

      }
      else if(e.target.value=="Popularity"){
        let sorted = fetchedData.sort((a, b) => {
            return Number(a.rating) - Number(b.rating);
         });
        //  console.log(sorted);
         let newData = [...sorted];
         setproduct(newData);

      }
      else if(e.target.value=="Newest"){
        let fetchedData = await getdata();

        let filtered = fetchedData.filter((e) => {
           return e.currentSku.isNew == true;
        });
        setproduct(filtered);


      }
}
 
    return (
        <>
        <div id='sortdiv'>
            <p>
             SORT:</p>
        <select id="itemsorter" 
         onChange={handleChange}
       
        >
  <option value="Popularity">Popularity</option>
  <option value="Newest">Newest</option>
  <option value="PLH">Price:Low to High</option>
  <option value="PHL">Price:High to Low</option>
  < option value="Discount">Discount</option>
</select>
        </div>
        
        
        </>
    )
}