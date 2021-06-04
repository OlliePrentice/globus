<?php

return [
    '1x1' => [
        'transforms' => [
            ['width' => 400],
            ['width' => 800],
            ['width' => 1200]
        ],
        'defaults' => [
            'ratio' => 1/1
        ]
    ],
    '4x3' => [
        'transforms' => [
            ['width' => 400],
            ['width' => 800],
            ['width' => 1200]
        ],
        'defaults' => [
            'ratio' => 4/3
        ]
    ],
    '16x9' => [
        'transforms' => [
            ['width' => 400],
            ['width' => 800],
            ['width' => 1200]
        ],
        'defaults' => [
            'ratio' => 16/9
        ]
    ],
    'post' => [
        'transforms' => [
            ['width' => 355, 'height' => 265],
        ],
    ],
    'imageSingle' => [
        'transforms' => [
            ['width' => 914, 'height' => 685],
        ],
    ],
    'imageDouble' => [
        'transforms' => [
            ['width' => 448, 'height' => 533],
        ],
    ],
    'imageNav' => [
        'transforms' => [
            ['width' => 355, 'height' => 210],
        ],
    ]
];
