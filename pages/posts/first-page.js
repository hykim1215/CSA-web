import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>About Ha Yun Kim:</h2>
            <p>Gender: Female</p>
            <p>Age: 18 (2004.07.26)</p>
            <p>Hobby:</p> 
            <ul>
                <li>Baking</li>
                <li>Drawing and Painting</li>
                <li>Watching movie or drama with family</li>
            </ul>
            <p>Hope you learned some things about me ٩(◕‿◕)۶</p>
            <Link href="/">Back to home </Link>
        </div>
    )
}