(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService) {
        $scope.name = ""

        $scope.greetings = []

        $scope.greet = function () {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)

        }
        var question = {
            text: "How do you create an IFFE?",
            author: "Bob",
            date: new Date(),
            tags: ["javascript", "function", "encapsulation"]
            answers: [
                {
                    text: "An IFFE is something you create when you don't know much about JavaScript."
                    author: "Bob",
                    date: new Date(),
                    score: -5,
                    accepted: false,
                    comments: [
                        {
                            text: "That's not right sir...",
                            author: "Jimmy Jow",
                            flagged: false
                        }
                    ]
                }, {
                    text: "Iffe stands for an immediately Invoked Function Expression"
                    author: "Chim Chim",
                    date: new Date(),
                    score: 10,
                    accepted: false,
                    comments: [
                        {
                            text: "Awesome! I never knew that",,
                            author: "Ken Wilcox",
                            flagged: false,
                        },{
                            text: "Why so cheap on the details bub? How about how we create it not wshat it is.",,
                            author: "Lou-Lou",
                            flagged: false,
                        },{
                            text: "@ken didi you know you can edit.",,
                            author: "Smart @$$",
                            flagged: false
                        }
                    ]
                }, {
                    text:"An immediately-invoked function expression (or IIFE, pronounced "iffy") is a JavaScript design pattern which produces a lexical scope using JavaScript's function scoping. Dur "
                    author: "The last brain cell left in this forum"
                    date: new Date(),
                    score: 10,
                    accepted: false
                    comments: [
                        {
                            text: "Poifect",
                            author: "K-bob",
                            flagged: true
                        }
                    
                    ]
                }
                
                $scope.question 
                
                //Asign the following variables.
                var questionText = question.text;
                var questionAnswerCount = question.answers.length;
                var question2ndAnswerScore = question.answers[1].score;
                var question2nd Answer1stCommentFlagged = question.answers[1].comments[0].flagged;
                //add up total score of all `answers`
                var questionScoreCount = question.answers[].score.length;
                //return all the `flagged` `comments`
                var questionFlaggedTrueCount = question.answers.comments.flagged[true];
                //count total number of `comments`
                var questionCommentCount = question.answers.comments.length;
                //check to see if `question` has `tag` `javascript` 
                var questionTagsJavascript = question.tags["javascript"] 
                //bonus: create a function that accepts a `tag` and checks to see if `question` has that `tag`

                var hasAnAcceptedAnswer 
                for (var index = 0; index < question.answers.length; index++) {
                    if (question.answers[i].accepted){
                        hasAnAcceptedAnswer = true;
                    }
                    
                }
    }
    })();
