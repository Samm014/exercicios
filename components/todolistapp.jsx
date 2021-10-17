/* eslint-disable react/jsx-key */
export default function Blog({contents}){
    return (
        <ul>
           {contents.map((content)=>{
              return <li>{content}</li>
           })}
       </ul>
    )
}