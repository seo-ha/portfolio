import React from 'react'

function Skill() {
  
  
  return (
    <div className='tabContent skill'>
      <div className='contentWrap'>
        
        <section className='sec1'>
          <h1><img src={process.env.PUBLIC_URL + '/assets/images/ico_human.png'} alt="" /><br/>이런 것을 할 줄 알아요!</h1>
          
          <ul className='tags'>
            <li className='tag color1'>html/css</li>
            <li className='tag color6'>jquery</li>
            <li className='tag color4'>javascript</li>
            <li className='tag color1'>scss</li>
            <li className='tag color2'>gsap</li>
            <li className='tag color4'>aos</li>
            <li className='tag color6'>Photoshop</li>
            <li className='tag color3'>Figma</li>
            <li className='tag color1'>GitHub</li>
          </ul>
          
          <div className='inBox'>
            <p>이런 환경에서 작업 해 봤어요!</p>
            <ul className='tags'>
              <li className='tag color5'>cafe24</li>
              <li className='tag color2'>react</li>
              <li className='tag color3'>php</li>
              <li className='tag color4'>flutter</li>
            </ul>
          </div>
        </section>
        
        <section className='sec2'>
          <table>
            <colgroup>
              <col width='30%'/>
              <col width='70%'/>
            </colgroup>
              <thead>
                <tr>
                  <th>두부</th>
                  <td>2021.10 ~ </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>
                      <p className='siteName'>Hej Volvo&#40;앱&#41; <small> | 퍼블리싱 90%</small></p>
                      <span className='siteInfo'>- 헤이볼보 앱 리뉴얼 작업.</span>
                      <span className='siteInfo'>- 메인 페이지 퀵 메뉴 작업.</span>
                      <span className='siteInfo'>- json을 사용해 서비스 센터 리스트 작업.</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Hej Volvo&#40;차량용&#41; <small> | 퍼블리싱 90%</small></p>
                    <span className='siteInfo'>- 헤이볼보 앱 리뉴얼 작업.</span>
                    <span className='siteInfo'>- 메인 페이지 퀵 메뉴 작업.</span>
                    <span className='siteInfo'>- localStorage를 사용해 다크모드 작업.</span>
                    <span className='siteInfo'>- json을 사용해 서비스 센터 리스트 작업</span>
                    <span className='siteInfo'>- Tmap.api를 사용해 경로안내, 이미지 캡처 작업.</span>
                    <div className='tags'>
                      <span className='tag color1'>jquery-ui.js</span>
                      <span className='tag color4'>Tmap API</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>HIV <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- Hiv 검진 안내 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- 메인 페이지 인물 선택작업.</span>
                    <span className='siteInfo'>- 스크롤을 내렸을 때 상단 progressbar 작업.</span>
                    <span className='siteInfo'>- hiv 검진 체험하기 작업.</span>
                    <span className='siteInfo'>- sessionStorage를 사용해 인물을 선택했을 때 새로고침, 뒤로가기 클릭 시 인물이 변하지 않는다.</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Skbioscience <small> | 퍼블리싱 40%</small></p>
                    <span className='siteInfo'>- Careers, Esg 페이지 반응형 작업.</span>
                    <span className='siteInfo'>- 웹 접근성 작업. </span>
                    <span className='siteInfo'>- 기타 유지보수 작업. </span>
                    <div className='tags'>
                      <span className='tag color5'>웹 접근성</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Volvo Digital Shop <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- volvo 한정판 차량 예약 사이트 반응형 작업. </span>
                    <span className='siteInfo'>- 이미지를 이용한 카운트다운 작업. </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Volvo Hej Space <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- volvo 유니폼 쇼핑몰 반응형 작업. </span>
                    <div className='tags'>
                      <span className='tag color2'>cafe24</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Boucheron <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 부쉐론 이벤트로 카드를 색칠해 공유하는 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- 카카오톡 인앱브라우저 우회 작업.</span>
                    <span className='siteInfo'>- 카카오톡, 페이스북 공유 작업.</span>
                    <div className='tags'>
                      <span className='tag color4'>kakao.api</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>First Kid Mall <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 아동의류 쇼핑몰 반응형 작업.</span>
                    <span className='siteInfo'>- 브랜드 별 다르게 설정된 헤더 css.</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>2024 기획재정부 <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 2023 기획재정부 사이트를 2024 기획재정부의 사이트 리뉴얼. </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Boucheron <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 부쉐론 이벤트 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- 현재 사용하고 있는 기기에 맞는 이미지 사이즈 다운로드 작업.</span>
                    <span className='siteInfo'>- 카카오톡, 페이스북 공유 작업.</span>
                    <div className='tags'>
                      <span className='tag color6'>kakao.api</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Volvo Lifestyle <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- volvo 생활용품 쇼핑몰 반응형 작업.</span>
                    <div className='tags'>
                      <span className='tag color3'>cafe24</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Medihealth <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 커피 브랜드 메디프레소의 헬스케어 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- fullPage.js를 사용해 메인페이지 반응형 작업.</span>
                    <div className='tags'>
                      <span className='tag color1'>fullPage.js</span>
                      <span className='tag color5'>aos</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>2023 기획재정부 <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 2023 기획재정부의 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- YouTube Player API로 동영상 삽입 작업.</span>
                    <div className='tags'>
                      <span className='tag color3'>YouTube Player API</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>Mediespresso <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 캡슐커피 브랜드 메디프레소의 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- cafe24의 구조를 이해 할 수 있었다.</span>
                    <span className='siteInfo'>- aos를 사용해 애니메이션 효과 사용.</span>
                    <div className='tags'>
                      <span className='tag color5'>cafe24</span>
                      <span className='tag color2'>aos</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>SMI Noise Scope <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 차량 정비 보고서 관리 사이트 반응형 작업.</span>
                    <span className='siteInfo'>- 작성한 내용을 PPT 파일로 다운로그 작업.</span>
                    <div className='tags'>
                      <span className='tag color4'>pptxGen.js</span>
                      <span className='tag color6'>jsZip.js</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className='siteName'>비드밀 <small> | 퍼블리싱 100%</small></p>
                    <span className='siteInfo'>- 위탁급식 업체를 문의ㆍ의뢰하는 사이트 반응형 작업.</span>
                  </td>
                </tr>
              </tbody>
          </table>
          
        </section>
        
        <section className='sec2'>
          <table>
            <colgroup>
              <col width='30%'/>
              <col width='70%'/>
            </colgroup>
              <thead>
                <tr>
                  <th className='mWidth'>개인 프로젝트</th>
                  <td> ~ ing</td>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td colSpan={2}>
                      <p className='siteName'>포트폴리오 사이트<small> | 퍼블리싱 100%</small></p>
                      <span className='siteInfo'>- 리액트로 포트폴리오 사이트를 만들었습니다</span>
                      <span className='siteInfo'>- 헤더를 잡고 드래그하면 이동이 가능하게 만들었습니다.</span>
                      <div className='tags'>
                        <span className='tag color3'>react</span>
                        <span className='tag color5'>scss</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                      <p className='siteName'>포켓몬 도감 사이트<small> | 퍼블리싱 100%</small></p>
                      <span className='siteInfo'>- 포켓몬 api 사용 </span>
                      <div className='tags'>
                        <span className='tag color4'>포켓몬 API</span>
                        <span className='tag color3'>react</span>
                        <span className='tag color5'>scss</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                      <p className='siteName'>독후감 사이트<small> | 퍼블리싱 100%</small></p>
                      <span className='siteInfo'>- 카카오톡 책 api 사용</span>
                      <div className='tags'>
                        <span className='tag color1'>kakao 책 API</span>
                        <span className='tag color2'>react</span>
                        <span className='tag color6'>scss</span>
                    </div>
                  </td>
                </tr>
              </tbody>
          </table>
          
        </section>
        
        
      </div>
    </div>
  )
}

export default Skill