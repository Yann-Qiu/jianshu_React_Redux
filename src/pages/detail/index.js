import React, { Component } from 'react';
import { Page,Button,DetailWrapper,DetailTitle,DetailText,DetailWriter } from './style.js';

class Detail extends Component{
	
	render(){
		return (
			<Page>
				<Button>
					<div className="like">
						<span className="iconfont">&#xe61c;</span>	
					</div>
					<div className="word">747赞</div>
					<div className="prime">
						<span className="iconfont">&#xe8a3;</span>
					</div>
					<div className="word">赞赏</div>
				</Button>
				<DetailWrapper>
					<DetailTitle>
						Title
					</DetailTitle>
					<DetailWriter>
						<img 
							className="pic" 
							src="https://upload.jianshu.io/users/upload_avatars/10934411/2b95aa67-88ea-4ad1-b069-5f784b074086.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" 
							alt="img"
						/>
						<div className="detailInfo">
							<div className="name">Name</div>
							<div className="desc">
								<span className="descItem diamond">
									<span className="iconfont">&#xe625;</span>
									1
								</span>
								<span className="descItem">
									2020.02.08 14:17:12
								</span>
								<span className="descItem">
									字数 450
								</span>
								<span className="descItem">
									阅读 62,495
								</span>
							</div>
						</div>
					</DetailWriter>
					<DetailText>
						TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
						TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
						TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
						TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
						TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
					</DetailText>
				</DetailWrapper>
			</Page>
		)
	}
	
}

export default Detail;