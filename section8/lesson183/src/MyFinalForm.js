import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input {...props} {...field}/>
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
      </>
  )
};

const MySelectInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <Field
        {...props}
        {...field}
        as='select'
        >
          {props.options.map(option => {
            return (
              <option 
                key={option.value} 
                value={option.value}>
              {option.key}
              </option>
            )
          })}                        
      </Field>
      {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
    </>
  )
};

const MyFinalForm = () => {
  const [consulting, setConsulting] = useState(false);
  const [travel, setTravel] = useState(false);
  const [rent, setRent] = useState(false);

  const contactOptions = [
    {key: 'Select contact method', value: ''},
    {key: 'Email', value: 'Email'},
    {key: 'Mobile phone', value: 'Mobile phone'},
  ]

  const consultingItemBeforeOptions = [
    {key: 'Select consulting item', value: ''},
    {key: '법률 컨설팅', value: 'Law'},
    {key: '회계 컨설팅', value: 'Accounting'},
    {key: '특허 컨설팅', value: 'IP/Patent'},
    {key: '파트너십 발굴 및 검증', value: 'Joint Partnership'},
  ]

  const consultingSubItemBeforeOptions = [
    {key: 'Select consulting subitem', value: ''},
    {key: '잠재 파트너사 발굴', value: 'Potential Partner Matching'},
    {key: '발굴 파트너사 검증', value: 'Potential Partner Validation & Business Information Report'},
  ]

  const consultingItemAfterOptions = [
    {key: 'Select consulting item', value: ''},
    {key: '법률 컨설팅', value: 'Law'},
    {key: '회계 컨설팅', value: 'Accounting'},
    {key: '특허 컨설팅', value: 'IP/Patent'},
    {key: '마케팅 컨설팅', value: 'Marketing'},
    {key: 'PMF 컨설팅', value: 'Product Market Fit'},
  ]

  const consultingSubItemAfterOptions = [
    {key: 'Select consulting subitem', value: ''},
    {key: '기업의 제품/서비스에 맞는 고객과 시장 정의', value: 'Defining Customer and Market'},
    {key: '제품/서비스를 보유한 기업의 현지시장 기반 사용자 경험 조사', value: 'User Experience Research'},
    {key: '제품/서비스를 보유한 기업이 타겟 시장의 잠재 파트너/고객 미팅을 통한 시장 검증', value: 'Potential Partner/Customers Meeting'},
    {key: '타겟 고객 피드백 기반 타겟 시장 현지 비즈니스 모델 피봇 컨설팅', value: 'Pivoting Business Model'},
    {key: '정의된 타겟 시장 및 고객 기반 세일즈 전략 컨설팅', value: 'Sales Plan'},
  ]

  const onConsultingSelect = () => {
    setConsulting(true);
    setTravel(false);
    setRent(false);
  }

  const onTravelSelect = () => {
    setConsulting(false);
    setTravel(true);
    setRent(false);
  }

  const onRentSelect = () => {
    setConsulting(false);
    setTravel(false);
    setRent(true);
  }

  console.log('render')

  return (
    <Formik
      initialValues={{
        company: '',
        name: '',
        email: '',
        phone: '',
        subject: 'D.N.A. 융합 제품.서비스 해외진출 지원사업',
        jv_stage: '',
        contact_me_by: '',
        available_time: '',
        consulting_item: '',
        consulting_subitem: '',
        description: '',
        company_intro: '',
        partner_profile: ''
      }}
      validationSchema = {Yup.object({
        company: Yup.string()
                  .required('Required field')
                  .min(2, 'Should be minimum 2 charactrers')
                  .max(80, 'Should be no more than 80 characters'),
        name: Yup.string()
                // .required('Required field')
                .min(2, 'Should be minimum 2 characters')
                .max(80, 'Should be no more than 80 characters'),
        email: Yup.string()
                // .required('Required field')
                .email('Wrong email format')
                .max(80, 'Should be no more than 80 characters'),
        phone: Yup.string()
                // .required('Required field')
                .matches(/\d{2}-\d{2}-\d{4}-\d{4}/, 'Wrong phone format'),
        jv_stage: Yup.string()
                    .required('Required field'),
        consulting_item: Yup.string()
                          .required('Required field'),
        description: Yup.string()
                      .max(5000, 'Should be no more than 5000 characters')
      })}
      onSubmit = {values => console.log(values, null, 2)}>
      {({values, setFieldValue}) => (
        <Form className='form'>
        <h2>D.N.A. 융합 제품.서비스 해외진출지원사업 협약 기업에게 지원되는 서비스로 당해년도 12월 첫째 주까지 신청 가능합니다.</h2>
        <MyTextInput
          label='회사명'
          id='company'
          name='company'
          type='text'
          placeholder='b2g company'
        />
        <MyTextInput
          label='담당자명'
          id='name'
          name='name'
          type='text'
          placeholder='John Smith'
        />
        <MyTextInput
          label='Email'
          id='email'
          name='email'
          type='text'
          placeholder='smith@b2g.com'
        />
        <MyTextInput
          label='Mobile Phone'
          id='phone'
          name='phone'
          type='text'
          placeholder='8-10-1000-1000'
        />
        <MyTextInput
          label='사업명'
          id='subject'
          name='subject'
          type='text'
          disabled
        />
        <div className='button_wrapper'>
          <button type='button' onClick={onConsultingSelect}>컨설팅</button>
          <button type='button' onClick={onTravelSelect}>국외 여비 지원</button>
          <button type='button' onClick={onRentSelect}>현지 임차료</button>
        </div>
        {consulting ? (<>
          <h2>Consulting</h2>
          <div>JV 설립 단계를 확인해주세요</div>
          <div className='button_wrapper'>
            <label>
              <Field
              type="radio" 
              name="jv_stage" 
              value="JV 설립 전"/>
              JV 설립 전
            </label>
            <label>
              <Field 
              type="radio" 
              name="jv_stage" 
              value="JV 설립 후"/>
              JV 설립 후
            </label>   
            <ErrorMessage className="error" name='jv_stage' component='div'/>         
          </div>
          {values.jv_stage === 'JV 설립 전' ? (
            <>
              <MySelectInput
                label='JV 설립 진행에 필요한 컨설팅 서비스는 무엇인가요(단일 서비스 서비스 선택)?'
                id='consulting_item'
                name='consulting_item'
                options={consultingItemBeforeOptions}
              />
              {values.consulting_item === 'Joint Partnership' ? (
                <>
                  <MySelectInput
                    label=''
                    id='consulting_subitem'
                    name='consulting_subitem'
                    options={consultingSubItemBeforeOptions}
                  />
                  {values.consulting_subitem === 'Potential Partner Matching' ? (
                    <>
                      <h2>발굴 파트너사 검증을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h2>
                      <label htmlFor="company_intro">기업 및 사업소개 자료 (영문, 자유양식)</label>                      
                      <input 
                        id="company_intro" 
                        name="company_intro" 
                        type="file" 
                        onChange={(event) => {
                        setFieldValue("company_intro", event.currentTarget.files[0]);
                      }} />
                      <label htmlFor="partner_profile">잠재 파트너사 프로필 (영문,
												<a href="https://drive.google.com/uc?export=dow
													nload&amp;id=1EjYKNMkUmfPQbAWWbvdZux
													Md0wb-Lu5-">센터양식</a>
												)</label>                      
                      <input 
                        id="partner_profile" 
                        name="partner_profile" 
                        type="file" 
                        onChange={(event) => {
                        setFieldValue("partner_profile", event.currentTarget.files[0]);
                      }} />                      
                    </>
                  ) : null}
                  {values.consulting_subitem === 'Potential Partner Validation & Business Information Report' ? (
                    <>
                      <h2>발굴 파트너사 검증을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h2>   
                      <label htmlFor="partner_profile">잠재 파트너사 프로필 (영문,
												<a href="https://drive.google.com/uc?export=dow
													nload&amp;id=1EjYKNMkUmfPQbAWWbvdZux
													Md0wb-Lu5-">센터양식</a>
												)</label>                      
                      <input 
                        id="partner_profile" 
                        name="partner_profile" 
                        type="file" 
                        onChange={(event) => {
                        setFieldValue("partner_profile", event.currentTarget.files[0]);
                      }} />                      
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ): null}
          {values.jv_stage === 'JV 설립 후' ? (
            <>
              <MySelectInput
                label='JV 설립 진행에 필요한 컨설팅 서비스는 무엇인가요(단일 서비스 서비스 선택)?'
                id='consulting_item'
                name='consulting_item'
                options={consultingItemAfterOptions}
              />
              {values.consulting_item === 'Product Market Fit' ? (
                <>
                  <MySelectInput
                    label=''
                    id='consulting_subitem'
                    name='consulting_subitem'
                    options={consultingSubItemAfterOptions}
                  />
                </>
              ) : null}
            </>
          ): null}
          <label htmlFor="description">해당 컨설팅 서비스가 필요한 이유가 무엇인가요?</label>
          <Field 
            id="description"
            name="description"
            as='textarea'
          />
        </>) : null}
        {travel ? (<div>
          <h2>Travel</h2>
        </div>) : null}
        {rent ? (<div>
          <h2>Rent</h2>
        </div>) : null}        
        <MySelectInput
          label='컨설팅 상담은 어떤 방식을 선호하시나요?'
          id='contact_me_by'
          name='contact_me_by'
          options={contactOptions}
        />
        <MyTextInput
          label='전화 상담을 선호하신다면 통화 가능하신 시간을 제안해주세요.'
          id='available_time'
          name='available_time'
          type='text'
          placeholder='시간 제한 없음 / 9-6 근무 시간 중/  6월1일 오전 중'
        />
        <button type='submit'>Submit</button>
      </Form>
      )}
    </Formik>
  )
};

export default MyFinalForm;