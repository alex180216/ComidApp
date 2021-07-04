const Circle = () =>{
    return(
        <div id="circle-navbar">
            <style jsx>
            {`
                #circle-navbar{
                    background:linear-gradient(to bottom right, #F37335, #FDC830);
                    width:20em;
                    height:20em;
                    border-radius:50%;
                    box-shadow: 4px 5px 8px 1px rgb(0 0 0 / 20%);
                    position: absolute;
                    top: -8em;
                    left: -6em;
                }
                
            `}
            </style>
        </div>
    )
}

export default Circle