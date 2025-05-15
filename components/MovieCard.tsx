type MovieCardProps = {
    src?: string;
};

export default function ImgPoster(props:MovieCardProps){
    return (
        <div>
            <img
            className="w-80 p-4"
            src={"https://image.tmdb.org/t/p/w500" + props.src}
            alt="ImgPoster">
            </img>
        </div>
    )
}