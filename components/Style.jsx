export default function Style(props){

    const objStyles = {
        backgroundColor: props.background === "light" ? "#ccc" : "#000",
        marginTop: '20px',
        color: props.color === "light" ? "#fff" : "#000",
        textAlign: props.right ? "right" : "left"
    }


    return(
        <>
            <h1 style={objStyles}>
                Hello, world!
            </h1>
        </>
    )
}