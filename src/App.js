import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { SignInPage, LogbookPage, RoleGuidePage, NotFoundPage } from './pages/pages'
import { Layout } from "./components/components";
import { getLang } from "./store/slices/langSlice";
import { signInWithTokenAction } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch()
  // const isRole = useSelector(state => state.auth.role)
  const isRole = 'branch'

  useEffect(() => {
    async function start() {
      dispatch(getLang())
      dispatch(signInWithTokenAction())
    }
    start()
  })

  return (
    <div className="App">
      <Routes>
        {!isRole ? <Route path='/' element={<SignInPage />} />
          : isRole === 'admin'
            ? <Route path='/' element={<RoleGuidePage />} />
            : <Route path='/' element={<Layout />}>
              <Route index element={<LogbookPage />} />
            </Route>}
      </Routes>
    </div>
  );
}

export default App;

// const testInfo = {
//   serialNumber: 12345678910,
//   applicant: 'Омуров Адилет',
//   agreementsNumber: 12345678910,
//   sum: 1e6,
//   currency: 'доллар',
//   graduationDate: Date.now(),
//   curator: 'Омуров Адилет',
//   orderStatus: 'Находится на рассмотрении',
//   action: 'Выплата кредита'
// }

// const testArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => ({ ...testInfo, id: index + 1 }))

{/* <Container>
<div>
  <Button size='s'>Войти</Button>
  <Button size='m'>Войти</Button>
  <Button size='l'>Войти</Button>
</div>
<div>
  <TextField size='s' />
  <TextField size='m' />
  <TextField size='l' />
  <br />
  <TextField size='s' placeholder='Имя пользователя' />
  <TextField size='m' placeholder='Имя пользователя' />
  <TextField size='l' placeholder='Имя пользователя' />
  <br />
  <TextField size='s' title='Имя пользователя' />
  <TextField size='m' title='Имя пользователя' />
  <TextField size='l' title='Имя пользователя' />
</div>
<div>
  <Loader size='m' style={{ display: 'inline-block' }} />
  <Loader size='l' style={{ display: 'inline-block' }} />
</div>
<div>
  <LanguageToggler />
</div>
<br />
<FilterForm />
<br />
<Table records={testArr} />
<br />
<Pagination pageCount={10} />
</Container>
<br />
<PageTitle>Ролдордун маалымдамасы</PageTitle>
<br />
<PageTitle>Справочник ролей</PageTitle> */}