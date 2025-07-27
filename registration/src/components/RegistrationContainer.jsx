import ProgressBar from './ProgressBar';
import RegistrationNavigation from './RegistrationNavigation';
import RegistrationWizard from './RegistrationWizard';
import { useRef } from "react";
import { useState } from 'react';

const TOTAL_PAGES = 5;

export default function RegistrationContainer() {
    const formRef = useRef();
    const [pageIndex, setPage] = useState(1);
    const [currentPageIsValid, setCurrentPageIsValid] = useState(false)

    return (
        <main>
            <ProgressBar totalPages={TOTAL_PAGES-1} pagesFinished={pageIndex-1}/>
            <RegistrationWizard pageIndex={pageIndex} formRef={formRef} setCurrentPageIsValid={setCurrentPageIsValid}/>
            <RegistrationNavigation
                currentPageIsValid={currentPageIsValid}
                totalPages={TOTAL_PAGES-1}
                pageIndex={pageIndex}
                setPage={setPage}
                onNext={() => formRef?.current?.requestSubmit()}
                onPrev={() => formRef?.current?.requestSubmit()}
            />
        </main>
    )

};