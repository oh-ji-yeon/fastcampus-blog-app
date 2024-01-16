import { Link } from "react-router-dom";

export default function PostDetail() {
    return (
        <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">패스트캠퍼스</div>
                    <div className="post__date">2024.01.12 금요일</div>
                    </div>
                    <div className="post__utils-box">
                        <div className="post__delete">삭제</div>
                        <div className="post__edit">
                            <Link to={`/posts/edit/1`}>수정</Link>
                        </div>
                    </div>
                    <div className="post__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sequi tempora accusamus aliquam, hic magnam accusantium repudiandae fugiat qui veritatis 
                        libero officia voluptatibus rem, reiciendis, architecto cupiditate cumque at mollitia unde!
                    </div>
            </div>
        </div>
        </>
    );
}