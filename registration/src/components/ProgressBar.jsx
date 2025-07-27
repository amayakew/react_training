export default function ProgressBar({totalPages, pagesFinished}) {
    const percentage = (100 / totalPages) * pagesFinished;

    return <h5 style={{alignSelf: "flex-end", margin: "0 8em", width: "15%", textAlign: "right"}}>Registration Completion: <span>{percentage}%</span></h5>;
};