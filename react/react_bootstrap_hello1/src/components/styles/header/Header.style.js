import React from 'react'
import styled from 'styled-components'

export const Header = styled.section`
	width: 100%;
	height: 80vh;
	/* background-color: #282c34; */
	position: relative;	// 다른 엘리먼트들과 겹치지 않도록 하기 위해
	display: flex;	// flex로 해두면, justify-content 에 center로 두어 가운데 배치가 가능하다.
	justify-content: center;
	// -- 제목을 가운데로 두고 싶다면?? 
	// -- 아래는 제목을 가운데로 배치하기 위한 속성.
	/*  
	overflow: hidden;
	align-items: center; 
	*/
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		max-width: 100%;
		min-height: 40px;
		display: inline-block;
		border-radius: 0 0 50% 50% / 0 0 100% 100%;
		transform: scaleX(1.5);
		background-position: right top;
		background-size: 100vw 200px;
		/* background-color: white; */
		background-color: #282c34;
	}
`

export const MainHeader = styled.div`
	position: relative;
	z-index: 1;
	margin: 0 auto;
	max-width: 500px;
	background-color: transparent;
`