import React from "react"

import './answerOptionBlock.css';

import BirdInfo from "../birdInfo/birdInfo";

export default class AnswerOptionBlock extends React.Component {
    state = {
        points: 5,
        levelEnd: false,
        index: false
    };

    nextLevel() {
        if (this.state.levelEnd) {
            const ulEl = document.getElementById("answer-options");
            const liEls = ulEl.querySelectorAll('li');
            const nextLevelButton = document.getElementById("next-level");
            liEls.forEach((li) => {
                if (li.classList.contains('default')) {
                    return;
                }
                li.classList.remove('error');
                li.classList.remove('success');
                li.classList.add('default');
            });
            nextLevelButton.classList.add('disabled');
            this.setState({points: 5, levelEnd: false, index: false});
            this.props.levelEnd();
        };
    };

    render() {
        const {addScore, data, number, score, win} = this.props;

        const answerCheck = (event, index) => {
            if (!this.state.levelEnd) {
                if (event.target.classList.contains('default')) {
                    if (number !== index - 1) {
                        const wrongAudio = document.getElementById("wrong");
                        wrongAudio.currentTime = 0;
                        wrongAudio.play();
                        this.setState({points: this.state.points - 1});
                        event.target.classList.remove('default');
                        event.target.classList.add('error');
                    } else {
                        const correctAudio = document.getElementById("correct");
                        const nextLevelButton = document.getElementById("next-level");
                        correctAudio.currentTime = 0;
                        correctAudio.play();
                        win();
                        const newScore = score + this.state.points;
                        event.target.classList.remove('default');
                        event.target.classList.add('success');
                        this.setState({levelEnd: true});
                        addScore(newScore);
                        nextLevelButton.classList.remove('disabled');
                    }
                }
            }
            this.setState({index: index - 1});
        };

        const liElements = data.map(({name, id}) => {
            return (
                <li className="list-group-item default"
                    key={id}
                    onClick={(e) => answerCheck(e, id)}>
                    <span className="li-btn"/>{name}
                </li>
            );
        });
        return (
            <div className="answer-option-block row mb2">
                <div className="col-md-4 answer">
                    <ul id="answer-options" className="item-list list-group">
                        {liElements}
                    </ul>
                </div>
                <BirdInfo index={this.state.index}
                          data={data}/>
                <button id="next-level" className="btn disabled" onClick={() => this.nextLevel()}>Следующий вопрос</button>
            </div>
        );
    };
};
