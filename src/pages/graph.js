import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './Responsive.css';
import Mockjs from 'mockjs';
import { Button, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";


const Chart = () => {
    const [sample, setSampleData] = useState([]);
    const d3Chart = useRef()
	// Ref for updating dimention 
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})
	// Ref for resize event update
	const update = useRef(false)

	useEffect(()=>{

		// Listen for any resize event update
		window.addEventListener('resize', ()=>{
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})

			// If resize, remove the previous chart
			if(update.current){
				d3.selectAll('g').remove()
			} else {update.current = true}
		})

		// Draw chart using the data and updated dimensions
		DrawChart(sample,dimensions)

    }, [dimensions, sample])
    

    useEffect(() => {
        const data= Mockjs.mock({
            "data|10": [
                {
                    "name|2": /[A-Z]/,
                    "barHeight|40-300": 50
                }
            ]
        })
        setSampleData(data.data); 

    }, [])

    useEffect(() => {
    }, [sample])

	const margin = {top: 50, right:30, bottom: 30, left:60}

	function DrawChart(data, dimensions){
		const chartwidth = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
		const chartheight = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom


        const svg = d3.select(d3Chart.current)
						.attr('width', chartwidth + margin.left + margin.right)
						.attr('height', chartheight + margin.top + margin.bottom)
        const x = d3.scaleBand()
					.domain(d3.range(data.length))
					.range([margin.left, chartwidth - margin.right])
					.padding(0.5)

        svg.append('g')
			.attr('transform', 'translate(0,'+ chartheight + ')')
			.call(d3.axisBottom(x).tickFormat(i=>data[i].name).tickSizeOuter(0))

		const max = d3.max(data, function(d){return d.barHeight})

		const y = d3.scaleLinear()
					.domain([0, max])
					.range([chartheight, margin.top])

		svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',0)')
			.call(d3.axisLeft(y))

        svg.append('g')
            .attr('fill', '#65f0eb')
			.selectAll('rect')
			.data(data)
			.join('rect')
			.attr('x', (d,i) => x(i))
            .attr('y', d => y(d.barHeight))
            .transition()
            .duration(2000)
            .attr('width', x.bandwidth())
            .attr('height', d => y(0) - y(d.barHeight))
            
	}
	
	const navigation = useNavigate();
    const onSubmit = (values, props) => {
        navigation("/register");
    }
    
    const x = -16;
    const y = 10;

    return (
		<React.Fragment>
			<Paper>
			<div>
			<Button
			style={{
				float: "right",
				marginTop: "-50px",
				marginRight: "40px",
				width:"70px",height:"50px"
				
			}}
			onClick={onSubmit}
			color="primary"
			variant='contained'
		>
				SignOut
			</Button>
				</div>
			</Paper>

			<Paper
				elevation={9}
				style={{
					marginTop: "18%",
					marginLeft: "10%",
					width: "75vw",
					height: "45vh",
					transform: `skew(${x}deg ,  ${y}deg )`
				}}>
                <div id='d3demo'>
                    <svg ref={d3Chart}></svg>
                </div>
			</Paper>   

	    </React.Fragment>
	)
}

export default Chart