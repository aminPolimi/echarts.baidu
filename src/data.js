const data = [[2017/12/20 16:15:15, 51.6], [2017/12/20 16:20:15, 47.7], [2017/12/20 16:25:15, 46.2], [2017/12/20 16:30:15, 45], [2017/12/20 16:35:15, 43.8], [2017/12/20 16:40:15, 46.8], [2017/12/20 16:45:15, 48.5], [2017/12/20 16:50:15, 49.8], [2017/12/20 16:55:15, 51], [2017/12/20 17:00:15, 52.5], [2017/12/20 17:05:15, 52.5], [2017/12/20 17:10:15, 52.4], [2017/12/20 17:15:15, 52.3], [2017/12/20 17:20:15, 52.3], [2017/12/20 17:25:15, 52.3], [2017/12/20 17:30:15, 52.3], [2017/12/20 17:35:15, 52.4], [2017/12/20 17:40:15, 52.4], [2017/12/20 17:45:15, 52.4], [2017/12/20 17:50:15, 52.4], [2017/12/20 17:55:15, 52.5], [2017/12/20 18:00:15, 52.5], [2017/12/20 18:05:15, 52.6], [2017/12/20 18:10:15, 52.6], [2017/12/20 18:15:15, 52.6], [2017/12/20 18:20:15, 52.7], [2017/12/20 18:25:15, 52.7], [2017/12/20 18:30:15, 52.3], [2017/12/20 18:35:15, 52.6], [2017/12/20 18:40:15, 52.3], [2017/12/20 18:45:15, 52.6], [2017/12/20 18:50:15, 52.4], [2017/12/20 18:55:15, 52.4], [2017/12/20 19:00:15, 52.4], [2017/12/20 19:05:15, 52.1], [2017/12/20 19:10:15, 52.4], [2017/12/20 19:15:15, 52.1], [2017/12/20 19:20:15, 52.4], [2017/12/20 19:25:15, 52.2], [2017/12/20 19:30:15, 52.3], [2017/12/20 19:35:15, 52.2], [2017/12/20 19:40:15, 52.1], [2017/12/20 19:45:15, 52.2], [2017/12/20 19:50:15, 51.9], [2017/12/20 19:55:15, 52.2], [2017/12/20 20:00:15, 52], [2017/12/20 20:05:15, 52.1], [2017/12/20 20:10:15, 52.2], [2017/12/20 20:15:15, 52], [2017/12/20 20:20:15, 52.2], [2017/12/20 20:25:15, 51.8], [2017/12/20 20:30:15, 52.2], [2017/12/20 20:35:15, 51.9], [2017/12/20 20:40:15, 52], [2017/12/20 20:45:15, 52.1], [2017/12/20 20:50:15, 51.7], [2017/12/20 20:55:15, 52.1], [2017/12/20 21:00:15, 51.9], [2017/12/20 21:05:15, 51.9], [2017/12/20 21:10:15, 52], [2017/12/20 21:15:15, 51.7], [2017/12/20 21:20:15, 52], [2017/12/20 21:25:15, 51.7], [2017/12/20 21:30:15, 52], [2017/12/20 21:35:15, 51.8], [2017/12/20 21:40:15, 51.9], [2017/12/20 21:45:15, 51.9], [2017/12/20 21:50:15, 51.6], [2017/12/20 21:55:15, 51.9], [2017/12/20 22:00:15, 51.7], [2017/12/20 22:05:15, 51.9], [2017/12/20 22:10:15, 51.8], [2017/12/20 22:15:15, 51.7], [2017/12/20 22:20:15, 51.8], [2017/12/20 22:25:15, 51.6], [2017/12/20 22:30:15, 51.8], [2017/12/20 22:35:15, 51.5], [2017/12/20 22:40:15, 51.8], [2017/12/20 22:45:15, 51.6], [2017/12/20 22:50:15, 51.6], [2017/12/20 22:55:15, 51.7], [2017/12/20 23:00:15, 51.4], [2017/12/20 23:05:15, 51.7], [2017/12/20 23:10:15, 51.5], [2017/12/20 23:15:15, 51.7], [2017/12/20 23:20:15, 51.6], [2017/12/20 23:25:15, 51.4], [2017/12/20 23:30:15, 51.6], [2017/12/20 23:35:15, 51], [2017/12/20 23:40:15, 51.5], [2017/12/20 23:45:15, 51.4], [2017/12/20 23:50:15, 51.2], [2017/12/20 23:55:15, 51.4], [2017/12/21 00:00:15, 51], [2017/12/21 00:05:15, 51.4], [2017/12/21 00:10:15, 51], [2017/12/21 00:15:15, 51.1], [2017/12/21 00:20:15, 51.1], [2017/12/21 00:25:15, 51], [2017/12/21 00:30:15, 51.3], [2017/12/21 00:35:15, 50.6], [2017/12/21 00:40:15, 51.1], [2017/12/21 00:45:15, 51], [2017/12/21 00:50:15, 50.9], [2017/12/21 00:55:15, 51], [2017/12/21 01:00:15, 50.5], [2017/12/21 01:05:15, 51], [2017/12/21 01:10:15, 50.7], [2017/12/21 01:15:15, 50.7], [2017/12/21 01:20:15, 50.9], [2017/12/21 01:25:15, 50.5], [2017/12/21 01:30:15, 50.9], [2017/12/21 01:35:15, 50.3], [2017/12/21 01:40:15, 50.7], [2017/12/21 01:45:15, 50.5], [2017/12/21 01:50:15, 50.5], [2017/12/21 01:55:15, 50.6], [2017/12/21 02:00:15, 50.3], [2017/12/21 02:05:15, 50.6], [2017/12/21 02:10:15, 50.3], [2017/12/21 02:15:15, 50.4], [2017/12/21 02:20:15, 50.4], [2017/12/21 02:25:15, 50.2], [2017/12/21 02:30:15, 50.5], [2017/12/21 02:35:15, 50.1], [2017/12/21 02:40:15, 50.3], [2017/12/21 02:45:15, 50.4], [2017/12/21 02:50:15, 50.1], [2017/12/21 02:55:15, 50.4], [2017/12/21 03:00:15, 49.9], [2017/12/21 03:05:15, 50.3], [2017/12/21 03:10:15, 50.1], [2017/12/21 03:15:15, 50], [2017/12/21 03:20:15, 50.2], [2017/12/21 03:25:15, 49.8], [2017/12/21 03:30:15, 50.2], [2017/12/21 03:35:15, 49.9], [2017/12/21 03:40:15, 49.8], [2017/12/21 03:45:15, 50.1], [2017/12/21 03:50:15, 49.7], [2017/12/21 03:55:15, 50.1], [2017/12/21 04:00:15, 49.6], [2017/12/21 04:05:15, 49.9], [2017/12/21 04:10:15, 50], [2017/12/21 04:15:15, 49.6], [2017/12/21 04:20:15, 50], [2017/12/21 04:25:15, 49.5], [2017/12/21 04:30:15, 49.9], [2017/12/21 04:35:15, 49.8], [2017/12/21 04:40:15, 49.6], [2017/12/21 04:45:15, 49.8], [2017/12/21 04:50:15, 49.4], [2017/12/21 04:55:15, 49.8], [2017/12/21 05:00:15, 48.6], [2017/12/21 05:05:15, 38.2], [2017/12/21 05:10:15, 34.8], [2017/12/21 05:15:15, 31.8], [2017/12/21 05:20:15, 31], [2017/12/21 05:25:15, 30.6], [2017/12/21 05:30:15, 31], [2017/12/21 05:35:15, 31], [2017/12/21 05:40:15, 30.8], [2017/12/21 05:45:15, 31.1], [2017/12/21 05:50:15, 30.8], [2017/12/21 05:55:15, 31], [2017/12/21 06:00:15, 31.6], [2017/12/21 06:05:15, 33.1], [2017/12/21 06:10:15, 34.2], [2017/12/21 06:15:15, 34.1], [2017/12/21 06:20:15, 34.5], [2017/12/21 06:25:15, 34.6], [2017/12/21 06:30:15, 34.5], [2017/12/21 06:35:15, 34.7], [2017/12/21 06:40:15, 34.4], [2017/12/21 06:45:15, 34.8], [2017/12/21 06:50:15, 34.9], [2017/12/21 06:55:15, 35], [2017/12/21 07:00:15, 34.9], [2017/12/21 07:05:15, 35.2], [2017/12/21 07:10:15, 35.2], [2017/12/21 07:15:15, 35.4], [2017/12/21 07:20:15, 35.5], [2017/12/21 07:25:15, 35.6], [2017/12/21 07:30:15, 35.6], [2017/12/21 07:35:15, 35.6], [2017/12/21 07:40:15, 35.5], [2017/12/21 07:45:15, 36.1], [2017/12/21 07:50:15, 36.3], [2017/12/21 07:55:15, 37.6], [2017/12/21 08:00:15, 39], [2017/12/21 08:05:15, 39.8], [2017/12/21 08:10:15, 41.2], [2017/12/21 08:15:15, 43], [2017/12/21 08:20:15, 45.1], [2017/12/21 08:25:15, 48.1], [2017/12/21 08:30:15, 48.1], [2017/12/21 08:35:15, 48.7], [2017/12/21 08:40:15, 49.5], 
]