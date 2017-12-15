
import styled, {css} from 'styled-components';﻿


export const Image = styled.img`
	width: 100%;

`;

export const HeroImage = styled.div`
	
    height: 120vh;
	background-image: url('${require('../../assets/workspace.png')}');
	background-repeat: no-repeat;
    background-size: contain;
    background-position: center;


    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    color: #A0A0A0;
    font-size: 16px;

    h2 {
    	margin-bottom: 150px;
    }

`;

export const RevealP = styled.p`
	position: relative;
	&:after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #92AF38;

		transform-origin: left;
		transform: rotateY(90deg);

		transition: transform 3s;
	}

	${({ hide }) => hide && css`
		&:after {
			transform: rotateY(0deg);
		}
	`}

`;



























