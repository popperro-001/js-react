import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { formPost } from './http-common';

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

const MyCheckBox = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: 'checkbox'});
  return (
      <>
          <label className='checkbox'>
              <input type='checkbox' {...props} {...field}/>
              {children}
          </label>           
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
  const endpoint = 'https://www.service.born2global.com/api/cases'

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

  const currencyOptions = [
    {key: 'KRW', value: 'KRW'},
    {key: 'GBP', value: 'GBP'},
    {key: 'CNY', value: 'CNY'},
    {key: 'EUR', value: 'EUR'},
    {key: 'JPY', value: 'JPY'},
    {key: 'USD', value: 'USD'},
  ]

  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]

  const travelBeforeFiles = [
    {name: 'travel_plan', label: '출장계획서(여비 지출 내용 포함)'},
    {name: 'platform_screen', label: '(숙박/항공) (여행사 이용 시) 견적서 또는 (직접 플랫폼 결제 시) 결제 예상금액 캡처화면'},
    {name: 'business_license', label: '(숙박/항공) (여행사 이용 시) 거래처 사업자등록증 및 계좌사본'},
    {name: 'traveler_info', label: '출장자 임직원 증빙(국민연금, 4대보험 가입내역서)'},
    {name: 'flight_ticket', label: '(직접 플랫폼 결제 시 – 항공권) 비국적기 이용시 동일 여정 국적기 운임 가격(결제 예상금액 캡쳐화면)'},
  ]

  const travelAfterFiles = [
    {name: 'travel_report', label: '출장 결과보고서'},
    {name: 'payment_info', label: '[여행사 이용 시] 세금계산서 및 이체확인증(계좌번호 기재 必) 또는 [직접 플랫폼 결제 시] 법인카드 매출전표 및 실물카드 사본'},
    {name: 'ticket_info', label: '항공기 탑승권(지류 탑승권 또는 모바일 캡처화면)'},
  ]

  const rentBeforeFiles = [
    {name: 'rental_contract', label: '임대차 계약서(JV-임대사업자 간)'},
    {name: 'rental_invoice', label: '임차료 인보이스(정산기간 해당분 중 참여기업 지분율반영액)'},
    {name: 'business_license', label: '참여기업 사업자등록증 및 통장사본'},
    {name: 'jv_info', label: '조인트벤처 사업자등록증 및 주주명부'},
  ]

  const rentAfterFiles = [
    {name: 'rental_contract', label: '임대차 계약서(JV-임대사업자 간, 사업자등록/법인등기 내 주소지 대조)'},
    {name: 'rental_invoice_detailed', label: '임차료 인보이스(정산기간 해당분)'},
    {name: 'rental_invoice', label: '임차료 인보이스(정산기간 해당분 중 참여기업 지분율 반영 액)'},
    {name: 'rental_transfer', label: '임차료 이체내역서(정산기간 해당분, JV 명의 계좌에서 이체)'},
    {name: 'currency_info', label: '참여기업의 외화송금 내역(정산기간 내 지분율 반영분, 참여기업 → JV 명의 계좌로 이체)'},
    {name: 'business_license', label: '참여기업 사업자등록증 및 통장사본'},
    {name: 'jv_info', label: '조인트벤처 사업자등록증 및 주주명부'},
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
        currency_type: 'KRW',
        travel_expense_amount: 0,       
        rent_fee: 0, 
        terms: false,
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
        jv_stage: Yup.string(),
        consulting_item: Yup.string(),
        description: Yup.string()
                      .max(5000, 'Should be no more than 5000 characters'),
        travel_expense: Yup.string(),                          
        travel_expense_amount: Yup.number()
                                .max(1000000, 'Should be no more than 1000000'),
        terms: Yup.boolean()
                .required('Need to agree with terms')
                .oneOf([true], 'Need to agree with terms'),
        company_intro: Yup.mixed()
                        // .nullable()
                        // .notRequired()
                        .test(
                          "fileFormat",
                          "Unsupported format, allowed only image, pdf, xls, xlxs",
                          (value) => {
                            if (value) {
                              return SUPPORTED_FORMATS.includes(value.type);
                            } else {
                              return true;
                            }
                          }                          
                        )
      })}
      onSubmit = {values => {
        let formData = new FormData();

        for (let value in values) {
          formData.append(value, values[value]);
        }

        for (let property of formData.entries()) {
          console.log(property[0], property[1]);
        }

        // formPost(endpoint, formData);
      }}>
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
              type='radio' 
              name='jv_stage' 
              value='JV 설립 전'/>
              JV 설립 전
            </label>
            <label>
              <Field 
              type='radio' 
              name='jv_stage' 
              value='JV 설립 후'/>
              JV 설립 후
            </label>   
            <ErrorMessage className='error' name='jv_stage' component='div'/>         
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
                      <br/>
                      <h3>발굴 파트너사 검증을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>
                      <ol>
                        <li>
                          <label htmlFor='company_intro'>기업 및 사업소개 자료 (영문, 자유양식)</label>                      
                          <input 
                            id='company_intro' 
                            name='company_intro' 
                            type='file' 
                            onChange={(event) => {
                            setFieldValue('company_intro', event.currentTarget.files[0]);
                            }}
                            />
                          <ErrorMessage className='error' name='company_intro' component='div'/>                       
                        </li>
                        <li>
                          <label htmlFor='partner_profile'>잠재 파트너사 프로필 (영문,
                            <a href='https://drive.google.com/uc?export=download&amp;id=1EjYKNMkUmfPQbAWWbvdZuxMd0wb-Lu5-'>센터양식</a>
                            )</label>                      
                          <input 
                            id='partner_profile' 
                            name='partner_profile' 
                            type='file' 
                            onChange={(event) => {
                            setFieldValue('partner_profile', event.currentTarget.files[0]);
                          }} />
                        </li> 
                      </ol>                      
                    </>
                  ) : null}
                  {values.consulting_subitem === 'Potential Partner Validation & Business Information Report' ? (
                    <>
                      <h3>발굴 파트너사 검증을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>   
                      <ol>
                        <li>
                          <label htmlFor='partner_profile'>잠재 파트너사 프로필 (영문,
                            <a href='https://drive.google.com/uc?export=download&id=1fzYLN6YcJAqqlO5p4NHP1H8AN_xdqXHC'>센터양식</a>
                            )</label>                      
                          <input 
                            id='partner_profile' 
                            name='partner_profile' 
                            type='file' 
                            onChange={(event) => {
                            setFieldValue('partner_profile', event.currentTarget.files[0]);
                          }} />  
                        </li>  
                      </ol>                      
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
                    label='PMF 서비스 중 세부 항목을 선택해주세요.'
                    id='consulting_subitem'
                    name='consulting_subitem'
                    options={consultingSubItemAfterOptions}
                  />
                </>
              ) : null}
            </>
          ): null}
          <label htmlFor='description'>해당 컨설팅 서비스가 필요한 이유가 무엇인가요?</label>
          <Field 
            id='description'
            name='description'
            as='textarea'
          />
        </>) : null}
        {travel ? (<div>
          <h2>Travel</h2>
          <h3>JV 설립 단계를 확인해주세요</h3>
          <div className='button_wrapper'>
            <label>
              <Field
              type='radio' 
              name='jv_stage' 
              value='JV 설립 전'/>
              JV 설립 전
            </label>
            <label>
              <Field 
              type='radio' 
              name='jv_stage' 
              value='JV 설립 후'/>
              JV 설립 후
            </label>   
            <ErrorMessage className='error' name='jv_stage' component='div'/>         
          </div>
          <h3>국외 여비 지원의 신청 단계를 선택해주세요</h3>
          <div className='button_wrapper'>
            <label>
              <Field
              type='radio' 
              name='travel_expense' 
              value='Apply for approval to plan for Travel Expense (국외여비 활용계획 승인 신청)'/>              
							국외여비 활용계획 승인 신청										
            </label>
            <label>
              <Field 
              type='radio' 
              name='travel_expense' 
              value='Apply for post-payment of Travel Expense (국외여비 사후 정산 신청)'/>              
							국외여비 사후정산 신청										
            </label>   
            <ErrorMessage className='error' name='travel_expense' component='div'/>         
          </div>
          <MySelectInput
            label='통화'
            id='currency_type'
            name='currency_type'
            options={currencyOptions}
          />
          {values.travel_expense === 'Apply for approval to plan for Travel Expense (국외여비 활용계획 승인 신청)' ? (
            <>
              <MyTextInput
                label='출장에 소요될 것으로 예상되는 경비는 얼마입니까?'
                id='travel_expense_amount'
                name='travel_expense_amount'
                type='number'                
              />
              <label htmlFor='description'>국외여비 활용 계획을 간단히 설명해주세요.</label>
              <Field 
                id='description'
                name='description'
                as='textarea'
              />
              <h3>국외여비 활용 신청을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>
              <ol>
                {travelBeforeFiles.map((item, i) => {
                  return (
                    <li key={i}>
                      <label htmlFor={item.name}>{item.label}</label>                      
                      <input 
                        id={item.name} 
                        name={item.name}
                        type='file'
                        onChange={(event) => {
                        setFieldValue(item.name, event.currentTarget.files[0]);
                      }} />
                    </li>
                  )
                })}
              </ol>
            </>
          ) : null}
          {values.travel_expense === 'Apply for post-payment of Travel Expense (국외여비 사후 정산 신청)' ? (
            <>
              <MyTextInput
                label='출장에 사용된 실 집행경비(항공임 및 숙박비)는 얼마입니까?'
                id='travel_expense_amount'
                name='travel_expense_amount'
                type='number'                
              />
              <label htmlFor='description'>국외여비 활용 결과를 간단히 설명해주세요.</label>
              <Field 
                id='description'
                name='description'
                as='textarea'
              />
              <h3>국외여비 활용 신청을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>
              <ol>
                {travelAfterFiles.map((item, i) => {
                  return (
                    <li key={i}>
                      <label htmlFor={item.name}>{item.label}</label>                      
                      <input 
                        id={item.name} 
                        name={item.name}
                        type='file' 
                        onChange={(event) => {
                        setFieldValue(item.name, event.currentTarget.files[0]);
                      }} />
                    </li>
                  )
                })}
              </ol>
            </>
          ) : null}
        </div>) : null}
        {rent ? (<div>
          <h2>Rent</h2>
          <h3>JV 설립 단계를 확인해주세요</h3>
          <div className='button_wrapper'>
            <label>
              <Field
              type='radio' 
              name='jv_stage' 
              value='JV 설립 전'
              disabled
              />
              JV 설립 전
            </label>
            <label>
              <Field 
              type='radio' 
              name='jv_stage' 
              value='JV 설립 후'              
              checked={values.jv_stage = 'JV 설립 후'}              
              />
              JV 설립 후
            </label>   
            <ErrorMessage className='error' name='jv_stage' component='div'/>         
          </div>
          <h3>국외 여비 지원의 신청 단계를 선택해주세요</h3>
          <div className='button_wrapper'>
            <label>
              <Field
              type='radio'
              name='office_rent' 
              value='Apply for approval to plan for JV Office rent (현지 임차료 활용 승인 신청)'/>              
							현지 임차료 활용 승인 신청										
            </label>
            <label>
              <Field 
              type='radio' 
              name='office_rent' 
              value='Apply for post-payment of JV Office rent Fee (현지 임차료 사후 정산 신청)'/>              
							현지 임차료 사후 정산 신청										
            </label>   
            <ErrorMessage className='error' name='travel_expense' component='div'/>         
          </div>
          <MySelectInput
            label='통화'
            id='currency_type'
            name='currency_type'
            options={currencyOptions}
          />
          {values.office_rent === 'Apply for approval to plan for JV Office rent (현지 임차료 활용 승인 신청)' ? (
            <>
              <MyTextInput
                label='해외 현지 사무공간 임차에 소요될 것으로 예상되는 금액은 얼마입니까?'
                id='rent_fee'
                name='rent_fee'
                type='number'                
              />
              <h4>보험료, 기타 부대비용 등을 제외한 공간 임차료만 지 원대상에 포함, 최대2천만원한도</h4>
              <h3>국외여비 활용 신청을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>
              <ol>
                {rentBeforeFiles.map((item, i) => {
                  return (
                    <li key={i}>
                      <label htmlFor={item.name}>{item.label}</label>                      
                      <input 
                        id={item.name} 
                        name={item.name}
                        type='file' 
                        onChange={(event) => {
                        setFieldValue(item.name, event.currentTarget.files[0]);
                      }} />
                    </li>
                  )
                })}
              </ol>
            </>
          ) : null}
          {values.office_rent === 'Apply for post-payment of JV Office rent Fee (현지 임차료 사후 정산 신청)' ? (
            <>
              <MyTextInput
                label='JV 설립 후 사업 운영을 위한 해외 현지 사무공간의 임차료 신청금액은 얼마입니까?'
                id='rent_fee'
                name='rent_fee'
                type='number'                
              />
              <h4>월 렌트비 중 참여기업의 지분율 반영분 x 해당 개월 수</h4>
              <h3>국외여비 활용 신청을 위해 필요한 서류를 제출해주세요. 파일크기는 15MB를 초과할 수 없습니다.</h3>
              <ol>
                {rentAfterFiles.map((item, i) => {
                  return (
                    <li key={i}>
                      <label htmlFor={item.name}>{item.label}</label>                      
                      <input 
                        id={item.name} 
                        name={item.name}
                        type='file' 
                        onChange={(event) => {
                        setFieldValue(item.name, event.currentTarget.files[0]);
                      }} />
                    </li>
                  )
                })}
              </ol>
            </>
          ) : null}
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
        <MyCheckBox
          name='terms'>
          개인 정보 수집 및 이용 동의          
        </MyCheckBox>
        <ol>
          <li>수집하는 개인정보는 회사명, 이름, 이메일, 휴대폰 번호</li>
          <li>개인정보의 수집 및 이용 목적 제공하신 정보는 컨설팅 서비스 신청 확인을 위해 사용됩니다.</li>
          <li>개인정보의 보유 및 이용기간 수집된 개인정보는 협약기간 종료 후 4년간 보관됩니다. 개인 정보 제공 동의가 없으면 컨설팅 서비스 신청이 불가합니다.</li>
        </ol>
        <button type='submit'>Submit</button>
      </Form>
      )}
    </Formik>
  )
};

export default MyFinalForm;