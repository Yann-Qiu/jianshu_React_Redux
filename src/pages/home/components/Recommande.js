import React, { Component } from 'react';
import { CodeApp } from '../style.js';

class Recommande extends Component{
	
	render(){
		return (
			<div>
				<img 
					className="recommande" 
					src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
				/>
				<img 
					className="recommande" 
					src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
				/>
				<img 
					className="recommande" 
					src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
				/>
				<img 
					className="recommande" 
					src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
				/>
				<CodeApp>
					<img 
						className="code"
						src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
					/>
					<div className="content">
						<p className="title">下载简书手机APP > </p>
						<p className="text">随时随地发现和创作内容</p>
					</div>
				</CodeApp>
			</div>
		)
	}
	
}

export default Recommande;