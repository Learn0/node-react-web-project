function Footer (){
    return (
        <footer id="footer">
            <div className={"inner"}>
                <ul className={"icons"}>
                    <li><a href="https://github.com/Learn0/webProject" className={"icon brands alt fa-github"}><span
                            className={"label"}>GitHub</span></a></li>
                </ul>
                <ul className={"copyright"}>
                    <li>2021 &copy; ourshopping.shop.</li>
                                <li><a href="http://localhost:8080/personalInformation">개인정보처리방침</a></li>
                                <li><a href="http://localhost:8080/serviceTerms">서비스 약관</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer