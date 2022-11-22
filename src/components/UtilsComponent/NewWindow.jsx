const NewWindow = (props) => {
    return(props.trigger) ?  ( 
        <div>
            <div className="absolute block z-50 container mx-auto  ">
                
                <p className="cursor-pointer" onClick={() => props.setTrigger(false)}>Закрыть</p>
            </div>
        </div>
     ) :"";
}
 
export default NewWindow;