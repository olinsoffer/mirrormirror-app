import React from 'react';


class HomeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="ImageTextContainerHome">
                    <div className="titleHome">
                        <div className="occasion">
                            <h1>Wedding</h1>
                        </div>
                        <div className="date">
                            <h1>16.11.2017</h1>
                        </div>
                    </div>
                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome first"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome second"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome third"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Valentino</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome">Rate</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ImageTextContainerHome colorGarden">
                    <div className="titleHome">
                        <div className="occasion">
                            <h1>Garden Party</h1>
                        </div>
                        <div className="date">
                            <h1>01.04.2018</h1>
                        </div>
                    </div>

                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondOne"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondTwo"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondThree"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondFour"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://www.scheideanstalt.de/fileadmin/_processed_/csm_Elisabeth-II-Sovereign-1978-k_fd322f55f5.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Liz</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome">Rate</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ImageTextContainerHome colorKarl">

                    <div className="titleHome">
                        <div className="occasion">
                            <h1>Black Tie</h1>
                        </div>
                        <div className="date">
                            <h1>31.12.2017</h1>
                        </div>
                    </div>

                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdOne"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdTwo"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdThree"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdFour"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://static.webshopapp.com/shops/071467/files/029113561/my-name-is-simone-karl-lagerfeld-my-name-is-simone.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Karl</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome">Rate</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ImageTextContainerHome">

                    <div className="titleHome">
                        <div className="occasion">
                            <h1>{'Occasion placeholder'}</h1>
                        </div>
                        <div className="date">
                            <h1>{'date placeholder'}</h1>
                        </div>
                    </div>

                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome "></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome "></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://static.webshopapp.com/shops/071467/files/029113561/my-name-is-simone-karl-lagerfeld-my-name-is-simone.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Some User</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome">Rate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomeView;
