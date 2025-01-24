
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("요구사항명세서.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1rhZp8feR0_Ci5C_5C68M7pre7L7V3dRM/view?usp=drive_link",imglog:"작성된 요구사항 명세.",sourceurl:"https://docs.google.com/document/d/17fyEwskjeoCKdEQmwogusdOjctniDdHLQbUR2eC7Spk/edit?usp=sharing"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1atOZWen38JJ7N4dBylDdUnwyfnkZQavF/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/13XskvSFcDaprMUqMknepZLZ-6HQmyAdX3sE-jfOj5jw/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/12lDi8yd8zEjwTng3W6FFLo-HOQU9Gyz3/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.27.0",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"자바 스크립트",imgurl:"https://drive.google.com/file/d/1k31_Sxpnx1R37YGMwjWFnVHhHZiHOlCK/view?usp=drive_link",imglog:"오픈소스 자바JDK v23.0.1",sourceurl:""})


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1KdpX54pTVEluqBjlzYZT0AOjFooLlQQi/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1ziRdjaSLbFCZ-24pfvJ9H0wKF9gg-hOH_r2iQbQ5wXw/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1kIyYVyxHTxP_Dnc4JYJnxFI6sokiGwvd/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1tpWmd1k0pvGs-pDtLMaRcLYZrkPth1dz/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1tpQiHRRMT1Adx7xJGxoXgLYTi3IJUTSE/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈 구현 작성",imgurl:"https://drive.google.com/file/d/1T9SDa4pCEgR46Avopjebp7g42zeNpGBa/view?usp=drive_link",imglog:"공통모듈 구현을 위한 로그인 UI 연동 및 로그아웃 UI 연동 구현 방식",sourceurl:"https://docs.google.com/document/d/1ErMo-ZD6ob7l_JBAkq8Ca3LuUUlt86uD4_VNg-ceNo0/edit?usp=drive_link"})//이미지타이틀
d2.set_img(0,{imgtitle:"시스템 구현을 위한 index 파일",imgurl:"https://drive.google.com/file/d/1UBupsPjfZ6TC4R9q7BWi7Mw6yZhi1mAz/view?usp=drive_link",imglog:"로그인 함수분리 , 로그아웃 함수분리",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"로그인,로그아웃 UI 연동 및 구현",imgurl:"https://drive.google.com/file/d/1tDSv88cExC3QiM3sTPLksnIGX20HlJ-r/view?usp=drive_link",imglog:"연동 및 구현 구축 주석 참조",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통 모듈 작동 페이지 구현",imgurl:"https://drive.google.com/file/d/1lybzs11P7D_ZbuLGoFeCSZNKTC0jNT9b/view?usp=drive_link",imglog:"기존 로그인 시스템에서 공통모듈 작동 페이지를 구현,소스링크& 주석 참조",sourceurl:"https://github.com/blackmoonlake/loginsystem"})//이미지타이틀


d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"테스트 케이스를 작성",imgurl:"https://drive.google.com/file/d/1gyKcmt--Fsk9NYsizXRWR0mMt1uTRuyW/view?usp=drive_link",imglog:"경계값 분석 테스트 실행 ",sourceurl:"https://docs.google.com/document/d/1J3vlgi0oZrrdKir3biMpFbYhKVvMsFKsYNBrzURQrYo/edit?usp=drive_link"})//이미지타이틀
d2.set_img(1,{imgtitle:"테스트 케이스를 진행한 java 파일 로직",imgurl:"https://drive.google.com/file/d/1acJ5uWVUnctkFkqMdbP47Tc9VR3DfyyE/view?usp=drive_link",imglog:"테스트 케이스 진행 소스링크,주석 참조 ",sourceurl:"https://docs.google.com/document/d/1J3vlgi0oZrrdKir3biMpFbYhKVvMsFKsYNBrzURQrYo/edit?usp=drive_link"})

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"단위 테스트를 작성",imgurl:"https://drive.google.com/file/d/1KdpX54pTVEluqBjlzYZT0AOjFooLlQQi/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1ziRdjaSLbFCZ-24pfvJ9H0wKF9gg-hOH_r2iQbQ5wXw/edit?usp=drive_link"})//이미지타이틀

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입 페이지 구현",imgurl:"https://drive.google.com/file/d/1zwiWjz802xSsfDrqrOKK6-1ZjUzuVLut/view?usp=drive_link",imglog:"회원가입 버튼 구현",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 페이지 항목 구현",imgurl:"https://drive.google.com/file/d/1zwiWjz802xSsfDrqrOKK6-1ZjUzuVLut/view?usp=drive_link",imglog:"아이디,비밀번호 2번확인,임의성명,임의나이,임의성별,임의거주지역",sourceurl:""})
d3.set_img(0,{imgtitle:"회원가입 성공",imgurl:"https://drive.google.com/file/d/1u7m3NXpK_i86KATeEWS3O1ORw7ZUBEVg/view?usp=drive_link",imglog:"항목 셀렉 조건 만족 시 회원가입 성공 창 출력",sourceurl:""})
d3.set_img(0,{imgtitle:"회원가입 연동된 컨트롤러 구현",imgurl:"https://drive.google.com/file/d/1IBm4eYYISvIIWPvkMa8oXkmRrj0EzO_V/view?usp=drive_link",imglog:"회원가입 시스템 구현 파일 소스링크 참조",sourceurl:"https://github.com/blackmoonlake/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(0,{imgtitle:"회원가입 조건 항목 등록",imgurl:"https://drive.google.com/file/d/11AXZ0r8dNl_dhs8FNUOS8W1Cur1ur5MQ/view?usp=drive_link",imglog:"회원가입 시 조건 항목과 순서등록 소스참조",sourceurl:"https://github.com/blackmoonlake/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dto/MemberDTO.java"})
d3.set_img(0,{imgtitle:"서비스 로직",imgurl:"https://drive.google.com/file/d/1CTgBUFuyMAT6TfTINjb1PQGP01cBIt4L/view?usp=drive_link",imglog:"서비스 로직에서 유효성 점검 소스링크 참조",sourceurl:"https://github.com/blackmoonlake/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberService.java"})
d3.set_img(0,{imgtitle:"회원가입 시 아이디와 비밀번호 및 등록된 항목 데이터베이스 저장",imgurl:"https://drive.google.com/file/d/1TbwUoQPlMcLZuuPiN012Nfkw_pTj2M-l/view?usp=drive_link",imglog:"아이디,비밀번호,이름,나이,주소 데이터베이스 저장",sourceurl:""})
d3.set_img(0,{imgtitle:"데이터 베이스 로직",imgurl:"https://drive.google.com/file/d/1TbwUoQPlMcLZuuPiN012Nfkw_pTj2M-l/view?usp=drive_link",imglog:"아이디,비밀번호,이름,나이,주소 데이터베이스 저장",sourceurl:""})



d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"회원 로그인 페이지 구현",imgurl:"https://drive.google.com/file/d/1dMKpsvYtJt3Ftu6VWZsN9KCo2p1P6Fco/view?usp=drive_link",imglog:"회원 로그인 페이지 구현",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"회원 가입한 아이디로 로그인 성공",imgurl:"https://drive.google.com/file/d/1_9NXjbB9B96-LUzM2b5IjiIc_vQgV-7C/view?usp=drive_link",imglog:"데이터 베이스에 저장된 회원가입된 아이디와 비밀번호를 사용하여 로그인",sourceurl:""})
d3.set_img(1,{imgtitle:"데이터 베이스에 저장된 아이디와 패스워드가 아닌것을 입력 시 실패",imgurl:"https://drive.google.com/file/d/1MXVFX43AKpVGhiL9YY7k9pm24HowBPx9/view?usp=drive_link",imglog:"아이디가 맞지만 비밀번호가 틀려 로그인이 되지않는다.",sourceurl:""})
d3.set_img(1,{imgtitle:"로그인 성공 혹은 실패에 관한 데이터 로직",imgurl:"https://drive.google.com/file/d/1uABRT_vD5FnmOhWCcWA4biwtaKSzyQzQ/view?usp=drive_link",imglog:"로그인 성공 혹은 실패시 .",sourceurl:"https://github.com/blackmoonlake/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(1,{imgtitle:"로그인 시스템을 위한 설정 로직",imgurl:"https://drive.google.com/file/d/1uABRT_vD5FnmOhWCcWA4biwtaKSzyQzQ/view?usp=drive_link",imglog:"로그인 시스템 로직 소스코드 참조.",sourceurl:"https://github.com/blackmoonlake/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})

d3.set_content("회원리스트연동")
d3.set_img(2,{imgtitle:"단위 테스트를 작성",imgurl:"https://drive.google.com/file/d/1KdpX54pTVEluqBjlzYZT0AOjFooLlQQi/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1ziRdjaSLbFCZ-24pfvJ9H0wKF9gg-hOH_r2iQbQ5wXw/edit?usp=drive_link"})//이미지타이틀


d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
