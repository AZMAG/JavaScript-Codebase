module.exports = function (grunt) {

    //instead of loadNpmTasks, load all dev dependencies from the package.json
    require('load-grunt-tasks')(grunt);

    var VERSION_REGEXP = /\bv(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\b/i;
    var includedModules = [
        'magcore/utils/test'
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
            demos: 'demos',
            cssSource: 'src/css',
            cssPlusSource: 'src/plus/css'
        },        
        license: grunt.file.read('LICENSE'),
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
                    src: [ './<%=config.out%>/js/*.js']
                }
            },
            debug: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [ './<%=config.out%>/js/*.js']
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'src/js/main.js'],
                updateConfigs: [ 'pkg' ],
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
                    baseUrl: 'src/js',                    
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
                    baseUrl: 'src/js',                    
                    out: '<%=config.out%>/js/<%= pkg.name %>.min.js',
                    // allow dependencies to be resolved but don't include in output (empty:)
                    paths: paths,
                    // but don't include them in the main build
                    exclude: excludedModules,
                    include: includedModules,
                    inlineText: true,
                    optimize: 'uglify2',
                    generateSourceMaps: false,
                    preserveLicenseComments: true,
                    findNestedDependencies: true,
                    removeCombined: true,
                    uglify2: {
                        compress: {
                            keep_infinity: true
                        }
                    }
                }
            }
        },
        replace: {
            src: {
                src: [ 'src/js/main.js'],
                dest: [ 'src/js/main.js'],
                replacements: [{
                    from: VERSION_REGEXP,
                    to: 'v<%=pkg.version%>'
                }]
            }
        },
        clean: {
            release: ['./<%=config.out%>'],
            debug: ['<%=config.out%>/js/magcore.*']
        }
    })
    grunt.registerTask('debug', [
        'clean:debug', 
        'requirejs:debug', 
        'requirejs:release', 
        'usebanner:debug'
        ]);
      grunt.registerTask('default', [
        'clean:release', 
        'requirejs',
        'replace:src',
        'usebanner:release'
        ]);

};