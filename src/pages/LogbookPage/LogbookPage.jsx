import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "debounce";
import {
    Background,
    Container,
    FilterForm,
    Loader,
    PageTitle,
    Pagination,
    Table,
    Select,
    Button,
    Modal,
    TextField,
} from '../../components/components'
import { useFetching } from '../../hooks/useFetching'
import { useModal } from '../../hooks/useModal'
import RecordsService from '../../API/RecordsService'
import { TableFields } from "../../constants/TableFields";
import langs from '../../langs/langs'
import cl from './LogbookPage.module.scss'

const LogbookPage = () => {
    const currentLang = useSelector(state => state.lang.currentLang)

    const [records, setRecords] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [limit, setLimit] = useState(10)
    const limitValues = [10, 25, 50]
    const [currentPage, setCurrentPage] = useState(1)

    const [modalActive, toggler] = useModal(false)

    const [addFields, setAddFields] = useState(Object.fromEntries(TableFields.map(item => [item, ''])))

    const [searchParams, setSearchParams] = useState(Object.fromEntries(TableFields.map(item => [item, ''])))

    const [fetching, isLoading, error] = useFetching(async (limit, page, searchParams = {}) => {
        const response = await RecordsService.getRecords(limit, page, { ...searchParams })
        setTotalRecords(response.headers['x-total-count'])
        setRecords(response.data)
    })

    useEffect(() => {
        fetching(limit, currentPage)
    }, [limit, currentPage])


    const debouncedHandleSubmit = useCallback(
        debounce((searchParams) => {
            setCurrentPage(1);
            fetching(limit, currentPage, searchParams);
        }, 1000), [])

    const handleInputChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            const updatedSearchParams = { ...searchParams, [name]: value };
            setSearchParams(updatedSearchParams);
            debouncedHandleSubmit(updatedSearchParams);
        }, [searchParams, debouncedHandleSubmit])

    const addRecordsHandler = async () => {
        const response = await RecordsService.addRecord({ ...addFields })
        setCurrentPage(1)
    }

    return (
        <>
            {modalActive && <Modal toggler={toggler}>
                <form className='form' onSubmit={e => e.preventDefault()}>
                    {TableFields.map(item => (
                        <TextField
                            className={cl.input}
                            placeholder={langs[currentLang][`logbook_form_${item}`]}
                            size='s'
                            key={item}
                            value={addFields[item]}
                            onChange={(e) => setAddFields({ ...addFields, [item]: e.target.value })}
                        />
                    ))}
                    <Button>{langs[currentLang].logbook_form_addRow}</Button>
                </form>
            </Modal>}

            <Background variant='header'>
                <PageTitle>{langs[currentLang].logbook_title}</PageTitle>
                <Container className={cl.container} bg>
                    <FilterForm className={cl.filterForm} searchParams={searchParams} onChange={handleInputChange} />
                    <div className={cl.additional}>
                        <Button className={cl.addButton} onClick={() => toggler(true)}>+</Button>
                        <div className={cl.quantity}>
                            <span className={cl.quantityTitle}>Показать записей:</span>
                            <Select currentValue={limit} options={limitValues} onChange={(value) => { setLimit(value); setCurrentPage(1) }} />
                        </div>
                    </div>
                    {isLoading ? <Loader size='l' /> : <Table className={cl.table} records={records} />}
                    <Pagination
                        className={cl.pagination}
                        currentPage={currentPage}
                        totalCount={totalRecords}
                        limit={limit}
                        changePage={setCurrentPage}
                    />
                </Container>
            </Background>
        </>
    )
}

export { LogbookPage }

// const testInfo = {
//     serialNumber: 12345678910,
//     applicant: 'Омуров Адилет',
//     agreementsNumber: 12345678910,
//     sum: 1e6,
//     currency: 'доллар',
//     graduationDate: Date.now(),
//     curator: 'Омуров Адилет',
//     orderStatus: 'Находится на рассмотрении',
//     action: 'Выплата кредита'
// }