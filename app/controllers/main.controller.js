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
                            flagged: false,
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
                        }
                    
                    ]
                }
    }
    })();
