// Generated on 2015-01-31 using generator-angular 0.10.0
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-loopback-sdk-angular');
    grunt.loadNpmTasks('grunt-docular');
    // Load grunt tasks automatically
    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        //yeoman: appConfig,
        // Watches files for changes and runs tasks based on the changed files
        loopback_sdk_angular: {
            services: {
                options: {
                    input: '../server/server.js',
                    output: 'app/modules/lbServices/lbServices.js'
                }
            }
        },
        docular: {
            groups: [
                {
                    groupTitle: 'LoopBack',
                    groupId: 'loopback',
                    sections: [
                        {
                            id: 'lbServices',
                            title: 'LoopBack Services',
                            scripts: ['app/modules/lbServices/lbServices.js']
                        }
                    ]
                }
            ]
        },
        docularserver: {
            targetDir:'docular_generated'
        }
    });
    grunt.registerTask('default', [
        'loopback_sdk_angular', 'docular','docularserver']);
};
