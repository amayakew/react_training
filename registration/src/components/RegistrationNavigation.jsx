export default function RegistrationNavigation({
    currentPageIsValid,
    pageIndex,
    totalPages,
    setPage,
    onNext = () => {},
    onPrev = () => {},
    onSubmit = () => {}
}) {
    const handleNext = () => {
        onNext();
        setPage(pageIndex + 1);
    };

    const handlePrev = () => {
        onPrev();
        setPage(pageIndex - 1)
    };

    const handleSubmit = () => {
        onSubmit();
        setPage(pageIndex  + 1)
    }

    return (
        <div style={{display: "flex", gap: "2em"}}>
            {(pageIndex > 1 && pageIndex <= totalPages) && <button onClick={handlePrev}>PREV</button>}
            {pageIndex < totalPages && <button disabled={!currentPageIsValid} onClick={handleNext}>NEXT</button>}
            {pageIndex === totalPages && <button onClick={handleSubmit}>SUBMIT</button>}
        </div>
    );
};