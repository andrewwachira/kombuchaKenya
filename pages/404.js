import Link from "next/link";

const FourZeroFour = ()=> {
	return(
		<div className="fourZeroFour">
			<h1>Somehow you have wound up in Hotel 404</h1>
			<h4>Oppps...That page cannot be served</h4>
			<p>Go back to<Link href="/"><a>Home page</a></Link></p>

			<style jsx>{
					`
						.fourZeroFour{
							text-align:center;
							padding:50px;
							height:90wh;
							margin:0;
						}
						.fourZeroFour h1{
							font-family: "Raleway";
							padding:20px;
						}
						.fourZeroFour h4,p{
							line-height: 1.4;
							font-family: "Maven Pro";
							padding: 10px;
							font-weight: lighter;
						}
						.fourZeroFour a{
							text-decoration:underline;
						}
					`
			}
			</style>
		</div>
		)
}

export default FourZeroFour;