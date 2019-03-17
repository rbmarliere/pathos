import React from "react";
import {
    Col,
    Row
} from "reactstrap";

const Eve = () =>
{
    return (
        <div className="Release-tracks">
            <div className="Release-track-title">
                Eve&apos;s Dropping Apples
            </div>

            &nbsp;

            <div className="Release-player">
                <iframe title="Eve" className="Release-bcplayer" src="https://bandcamp.com/EmbeddedPlayer/album=3314172135/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1604725837/transparent=true/" seamless><a href="http://pathos.bandcamp.com/album/rapture">Rapture by Pathos</a></iframe>
            </div>

            &nbsp;

            <Row>
                <Col xs="5" className="Release-left">
                    <div className="Release-track-credits">
                        Baixo por Lucas Guida
                        <br/>Bateria por Hugo Moutinho
                        <br/>Concebida por Ricardo Marlière
                        <br/>Guitarra elétrica por Ricardo Marlière
                        <br/>Letra de Ricardo Marlière e JP Vieira
                        <br/>Percussão por Álvaro Moutinho
                        <br/>Piano elétrico por Luiz Andrès
                        <br/>Violão de 12 por Luiz Andrès e Ricardo Marlière
                        <br/>Violão de aço por Ricardo Marlière
                        <br/>Voz de JP Vieira
                        <br/>Voz de apoio de Lorena Fernandes
                        <br/>Órgão por Luiz Andrès
                    </div>

                    <div className="Release-quote">
                    </div>
                </Col>

                <Col xs="7" className="Release-right Release-lyric">
                    Eve is weeping in morning gloss
                    <br/>Searching for feelings or stones to toss
                    <br/>The treetop doesn&apos;t let she see the sky light
                    <br/>She&apos;s trapped inside this boring paradise
                    <br/>
                    <br/>The need of breathing new and fresh air
                    <br/>Is driving her mad while she wonders what&apos;s fair
                    <br/>and in her climb, ten thousand years go by
                    <br/>As a hissing sound invites her to try
                    <br/>
                    <br/>Stop to witness the ruin, the missiles
                    <br/>The sky is burning thanks to you babe
                    <br/>Forget about right or wrong
                    <br/>Just remember where you belong
                    <br/>
                    <br/>Searing clouds are about to storm
                    <br/>Make up your mind we ain’t got all day
                    <br/>I can’t live with this doubt in my heart
                    <br/>Woman, why won’t you let it go?
                    <br/>
                    <br/>Dazed by thunder with a star in her eyes
                    <br/>She looks to the ground after seeking the skies
                    <br/>A beautiful seedling sprouts from her last tear
                    <br/>and a smile she gives in understanding the fear
                    <br/>
                    <br/>Dropping apples like bombs she divided the world
                    <br/>Tried to hear those sounds never heard
                    <br/>Now the sin of all, nothing will reveal the pain
                    <br/>and the world will never be the same

                </Col>
            </Row>
        </div>
    );
};

export default Eve;

