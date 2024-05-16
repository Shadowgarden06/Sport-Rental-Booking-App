import React from 'react';
import './Eventpage.css';
import link1 from "./image/Link 1.jpg"
import link2 from "./image/Link 2.jpg"
import link3 from "./image/Link 3.jpg"
import link4 from "./image/Link 4.png"
import link5 from "./image/Link 6.jpg"
import link6 from "./image/Link 7.jpg"





function EventPage(props) {
    const openNewTab = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
    };
    return (
        <div>
            <section className="banner">
                <div className="banner_main_content">
                    <h2>Danh sách tin tức cho câu lạc bộ</h2>
                    <div className="current_news_head" >
                        <h3>Participants showcase their basketball skills in various challenges such as shooting accuracy and dribbling speed.</h3>
                        <span>Basketball - Basketball Skills Challenge</span>
                    </div>
                    <div className="current_news_head" >
                        <h3>A charity tournament where football teams compete to raise funds for a noble cause.</h3>
                        <span>Football - Football Charity Tournament</span>
                    </div>
                    <div className="current_news_head" >
                        <h3>An exhibition match featuring top players demonstrating their prowess in badminton.</h3>
                        <span>Badminton - Badminton Exhibition Match</span>
                    </div>
                    <div className="current_news_head" >
                        <h3>A summer camp designed to provide young athletes with intensive training and skill development.</h3>
                        <span>Training - Training Camp for Young Athletes</span>
                    </div>
                    <div className="current_news_head" >
                        <h3>A competition where baseball players compete to hit the most home runs within a designated time frame.</h3>
                        <span>Baseball - Home Run Derby Competition</span>
                    </div>
                </div>

                <div className="banner_sub_content">
                    <div className="hot_topic">
                        <img src={link1} />
                        <div className="hot_topic_content">
                            <h2>Premier League & FA Cup predictions</h2>
                            <p className="ping">Chelsea to knock out Man City at Wembley, another Arsenal win to nil at Wolves</p>
                            <button onClick={() => openNewTab("https://www.skysports.com/football/news/11095/13118359/premier-league-fa-cup-predictions-chelsea-to-knock-out-man-city-at-wembley-another-arsenal-win-to-nil-at-wolves")}>Read More</button>
                        </div>
                    </div>

                    <div className="hot_topic">
                        <img src={link2} />
                        <div className="hot_topic_content">
                            <h2>Nuggets' Michael Porter Jr. heads into playoffs after trying week for family</h2>
                            <p className="ping">Nuggets coaches and teammates are rallying behind Michael Porter Jr. as he deals with a pair of devastating family issues.</p>
                            <button onClick={() => openNewTab("https://bwfworldtour.bwfbadminton.com/news-single/2024/03/27/smashing-stats-spain-masters-2024/")}>Read More</button>
                        </div>
                    </div>
                    <div className="hot_topic">
                        <img src={link3} />
                        <div className="hot_topic_content">
                            <h2>Liverpool, Arsenal or Man City?</h2>
                            <p className="ping"> Three-way Premier League title race analysed. Two points divide Arsenal, Liverpool and Man City in the Premier League table; Mikel Arteta's side have the toughest league run-in</p>
                            <button onClick={() => openNewTab("https://www.skysports.com/football/news/11095/13115810/liverpool-arsenal-or-man-city-three-way-premier-league-title-race-analysed")}>Read More</button>
                        </div>
                    </div>
                    <div className="hot_topic">
                        <img src={link4} />
                        <div className="hot_topic_content">
                            <h2>Live football on Sky Sports today and this week</h2>
                            <p className="ping">All the live football on Sky Sports, including key clashes in the Championship, Scottish Premiership, WSL and the Premier League...</p>
                            <button onClick={() => openNewTab("https://www.skysports.com/football/news/11661/12002801/live-football-on-sky-sports-today-and-this-week-plus-more-fixtures-games-dates-kick-off-times")}>Read More</button>
                        </div>
                    </div>
                    <div className="hot_topic">
                        <img src={link5} />
                        <div className="hot_topic_content">
                            <h2>What to expect in 1st round of 2024 NBA Playoffs</h2>
                            <p className="ping">Get ready for the playoffs with the biggest storylines and key things to watch in every series.</p>
                            <button onClick={() => openNewTab("https://www.nba.com/news/series-previews-first-round-2024-nba-playoffs")}>Read More</button>
                        </div>
                    </div>
                    <div className="hot_topic">
                        <img src={link6} />
                        <div className="hot_topic_content">
                            <h2>SPAIN MASTERS: ATTENTION ON LIN CHUN-YI, MIYAZAKI</h2>
                            <p className="ping">Three of four winners of this year’s HSBC BWF World Tour Super 300 tournaments feature in the men’s singles draw of the Madrid Spain Masters 2024 by IBERDROLA.</p>
                            <button onClick={() => openNewTab("https://bwfworldtour.bwfbadminton.com/news-single/2024/03/26/spain-masters-attention-on-lin-chun-yi-miyazaki/")}>Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventPage;
