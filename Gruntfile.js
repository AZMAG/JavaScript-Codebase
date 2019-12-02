module.exports = function (grunt) {

    //instead of loadNpmTasks, load all dev dependencies from the package.json
    require('load-grunt-tasks')(grunt);
    require("matchdep").filterDev(["grunt-*", "intern"]).forEach(grunt.loadNpmTasks);

    var VERSION_REGEXP = /\b(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\b/i;
    var includedModules = [
        'magcore/main',
        'magcore/utils/formatter'
    ];
    var excludedModules = [];
    var paths = {
        'magcore': ''
    };
    var dependencyPaths = {};
    var includedDependencies = [];
    grunt.initConfig({
        config: {
            out: 'dist',
            src: 'src',
            demos: 'demos'
        },
        license: grunt.file.read('LICENSE.md'),
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.description %>\n *\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.repository.url %>)\n' +
            ' * <%= license %>\n' +
            ' */\n',
        usebanner: {
            release: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['./<%=config.out%>/js/*.js']
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', '<%=config.src%>/js/main.js'],
                updateConfigs: ['pkg'],
                commit: false,
                createTag: false,
                tagName: '%VERSION%',
                tagMessage: '%VERSION%',
                push: false,
                globalReplace: true,
                prereleaseName: 'beta'
            }
        },
        requirejs: {
            debug: {
                options: {
                    baseUrl: './<%=config.src%>/js',
                    out: './<%=config.out%>/js/<%= pkg.name %>.js',
                    // allow dependencies to be resolved but don't include in output (empty:)
                    paths: paths,
                    // but don't include them in the main build
                    exclude: excludedModules,
                    include: includedModules,
                    inlineText: true,
                    optimize: 'none',
                    generateSourceMaps: false,
                    preserveLicenseComments: true,
                    findNestedDependencies: true,
                    removeCombined: true
                }
            },
            release: {
                options: {
                    baseUrl: './<%=config.src%>/js',
                    // allow dependencies to be resolved but don't include in output (empty:)
                    paths: paths,
                    // but don't include them in the main build
                    exclude: excludedModules,
                    include: includedModules,
                    inlineText: true,
                    optimize: 'none',
                    generateSourceMaps: false,
                    preserveLicenseComments: true,
                    findNestedDependencies: true,
                    removeCombined: true,
                    out: function (text, sourceMapText) {
                        var UglifyJS = require('uglify-es'),
                            uglified = UglifyJS.minify(text),
                            config = grunt.config.get('config'),
                            pkg = grunt.config.get('pkg');

                        grunt.file.write(`${config.out}/js/${pkg.name}.min.js`, uglified.code);
                    }
                }
            }
        },       
        replace: {
            src: {
                src: ['./<%=config.src%>/js/main.js'],
                dest: ['./<%=config.src%>/js/main.js'],
                replacements: [{
                    from: VERSION_REGEXP,
                    to: '<%=pkg.version%>'
                }]
            }
        },
        clean: {
            release: ['./<%=config.out%>'],
            debug: ['./<%=config.out%>/css', './<%=config.out%>/js/magcore.*'],
            docs: ['docs']
        },
        sass: {
            release: {
                files: [
                    {
                        expand: true,
                        cwd: './<%=config.src%>/scss',
                        src: ['main.scss'],
                        dest: './<%=config.src%>/css',
                        ext: '.css'
                    }
                ]
            }
        },
        cssmin: {
            release: {
                files: {
                    './<%=config.out%>/css/<%= pkg.name %>.min.css': [                                               
                        './<%=config.src%>/css/main.css'
                    ]
                }
            }
        },
        concat: {
            css: {
                src: [
                    './<%=config.src%>/css/main.css'
                ],
                dest: './<%=config.out%>/css/<%=pkg.name%>.css'
            }
        },
        jsdoc: {
            release: {
                src: ['./<%=config.src%>/js/**/*.js'],
                options: {
                    destination: './docs',
                    configure: './jsdoc.conf.json',
                    template: './node_modules/docdash'
                }
            }
        },
        intern: {
            options: {
                suites: ["tests/unit/**/*.js",],
                functionalSuites: ["tests/functional/**/*.js"],
                environments: [
                    {
                        browserName: "chrome",
                        fixSessionCapabilities: "no-detect",
                        chromeOptions: {
                            args: ["headless", "disable-gpu", "window-size=1024,768"]
                        }
                    }
                ],
                reporters: ['runner'],
            },
            browser: {
                options: {
                    tunnelOptions: {
                        drivers: [
                            { name: "chrome", "version": "78.0.3904.70" }
                        ]
                    },
                    loader: {
                        script: "dojo2",
                        options: {
                            async: false,
                            tlmSiblingOfDojo: false,
                            has: {
                                "extend-esri": 1
                            },
                            packages: [
                                {
                                    name: "magcore",
                                    location: "./<%=config.src%>/js"
                                },
                                {
                                    name: "esri",
                                    location: "node_modules/arcgis-js-api"
                                },
                                {
                                    name: "dojo",
                                    location: "node_modules/dojo"
                                },
                                {
                                    name: "dojox",
                                    location: "node_modules/dojox"
                                },
                                {
                                    name: "dijit",
                                    location: "node_modules/dijit"
                                }
                            ]
                        }
                    },
                    plugins: [
                        'node_modules/jquery/dist/jquery.js'
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: 35719                
            },
            demo: {
                files: ['./<%=config.src%>/scss/**/*.{scss,sass}', './<%=config.src%>/js/**/*.js', './<%=config.src%>/js/**/*.html',                
                './demo/css/**/*.css', './demo/js/**/*.js', './demo/js/**/*.html', './demo/index.html'],
                tasks: ['debug']
            },
            docs: {
                files: ['<%= config.src%>/js/**/*.js', './jsdoc.conf.json', './readme.md'],
                tasks: ['clean:docs', 'jsdoc']
            }
        },
        connect: {
            options: {
                hostname: 'localhost',
                livereload: 35719,
                base: './'
            },            
            demo: {
                options: {    
                    port: 8001,                
                    open: {
                        target: 'http://localhost:8001/demo'
                    }
                }
            },
            docs: {
                options: {    
                    port: 8002,         
                    open: {
                        target: 'http://localhost:8002/docs'
                    }
                }
            }
        }
    })
    grunt.registerTask('debug', [
        'clean:debug',        
        'requirejs',
        'replace',
        'sass',
        'cssmin', 
        'concat', 
        'usebanner'
    ]);
    grunt.registerTask('default', [
        'intern',
        'clean:release',
        'requirejs',
        'replace',
        'sass',
        'cssmin', 
        'concat', 
        'usebanner'
    ]);
    grunt.registerTask('demo', [
        'connect:demo', 
        'watch:demo'
    ]);
    grunt.registerTask('doc', ['clean:docs', 'jsdoc', 'connect:docs', 'watch:docs']);
    grunt.registerTask('test', ['intern']);
};