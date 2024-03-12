import AcCard from "./card";


const CardList = ({ data, formData, setFormData }) => {
    return (
      <div className="list gap-4 flex m-2">
        {data && data.map((element) => <AcCard key={element.name} {...element} />)}
      </div>
    );
  };
  
  export default CardList;