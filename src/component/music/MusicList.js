import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import "./MusicList.css";

function MusicList(props)
{
    const [musicList,setMusicList]=useState([])
    const [searchDTO, setSearchDTO]=useState([])
    
    useEffect(()=>{
        movePage()
    },[])
    const changePage=(page)=>{
        searchDTO.page = page
        movePage()
    }
    const changeSearch=(e)=>{
        searchDTO.searchKeyword = e.target.value
        movePage()
    }
    const movePage=()=>{
        axios.get("http://localhost:8080/music/search", {
            params:{
                page:searchDTO.page,
                searchKeyword:searchDTO.searchKeyword
            }
        })
        .then(response=>{
            setMusicList(JSON.parse(response.data[0]))
            setSearchDTO(response.data[1])
        })
        .catch((error)=>{
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error.message)
            }
            alert("에러가 발생하였습니다.")
            window.location.reload()
        })
    }
    const viewMusic=(url)=>{
        window.open(url);
    }
    let html=[]
    if(musicList.length > 0){
        html=musicList.map((musicDTO)=>
            <tr key={musicDTO.idx} onClick={()=>{viewMusic(musicDTO.youtubeKey)}}>
                <td className={"rank"}>{musicDTO.idx}</td>
                {
                    musicDTO.state === 'new' && <td><font style={{"color":"green"}}>new</font></td>
                }
                {
                    musicDTO.state === '유지' && <td><font style={{"color":"gray"}}>-</font></td>
                }
                {
                    musicDTO.state === '상승' && <td><font style={{"color":"blue"}}>▲</font>{musicDTO.increment}</td>
                }
                {
                    musicDTO.state === '하강' && <td><font style={{"color":"red"}}>▼</font>{musicDTO.increment}</td>
                }
                <td><img src={musicDTO.poster} className={"img-circle"} /></td>
                <td className={"title"}>{musicDTO.title}</td>
                <td className={"singer"}>{musicDTO.singer}</td>
                <td>{musicDTO.album}</td>
            </tr>
        )
    }else{
        html=(
            <tr>
                <td colSpan={"100%"}>조회된 결과가 없습니다.</td>
            </tr>
        )
    }
    let page=[]
    if(searchDTO.previousCheck){
        page.push(
            <li key={1} onClick={()=>{changePage(1)}}>
                <a href="#none"><span>&laquo;</span></a>
            </li>
        )
        page.push(
            <li key={searchDTO.firstPage-1} onClick={()=>{changePage(searchDTO.firstPage-1)}}>
                <a href="#none"><span>&lsaquo;</span></a>
            </li>
        )
    }
    for (let i = searchDTO.firstPage; i <= searchDTO.lastPage; i++) {
        page.push(
            <li key={i} onClick={()=>{changePage(i)}} className={((i === searchDTO.page) ? 'active' : '')}>
                <a href="#none">{i}</a>
            </li>
        )
    }
    if(searchDTO.nextCheck){
        page.push(
            <li key={searchDTO.lastPage+1} onClick={()=>{changePage(searchDTO.lastPage+1)}}>
                <a href="#none"><span>&rsaquo;</span></a>
            </li>
        )
        page.push(
            <li key={searchDTO.pageCount} onClick={()=>{changePage(searchDTO.pageCount)}}>
                <a href="#none"><span>&raquo;</span></a>
            </li>
        )
    }
    return (
        <Fragment>
            <input type="text" className={"form-control"} onChange={changeSearch} placeholder="노래를 검색하세요." />
            <div className={"table-responsive"}>
                <table className={"table table-hover"}>
                    <thead>
                        <tr className={"success"}>
                            <th colSpan={2}>랭킹</th>
                            <th>앨범</th>
                            <th>곡명</th>
                            <th>가수명</th>
                            <th>앨범</th>
                        </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
            </div>
            <nav className={"text-center"}>
                <ul className={"pagination"}>
                    {page}
                </ul>
            </nav>
        </Fragment>
    )
}

export default MusicList