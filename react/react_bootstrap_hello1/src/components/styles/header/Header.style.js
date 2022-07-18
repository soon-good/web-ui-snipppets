import React from 'react'
import styled from 'styled-components'

export const Header = styled.section`
	width: 100%;
	height: 80vh;
	background-color: #282c34;
	position: relative;	// 다른 엘리먼트들과 겹치지 않도록 하기 위해
	display: flex;	// flex로 해두면, justify-content 에 center로 두어 가운데 배치가 가능하다.
	justify-content: center;
`

export const MainHeader = styled.div`
	position: relative;
`