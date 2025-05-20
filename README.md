# CVR Whitelist Configurator

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-327FC7.svg?logo=github&logoColor=white)](https://djshinter.github.io/CVRWhitelistConfigurator/)
[![GitHub](https://img.shields.io/github/license/DjShinter/CVRWhitelistConfigurator)](https://github.com/DjShinter/CVRWhitelistConfigurator/blob/main/LICENSE)

A way to easily manage URL whitelist configurations. 

This tool allows you to easily add, edit, and manage URL policies for CVR video player links.

## Features

- Modern dark mode interface
- Easy-to-use JSON configuration editor
- Support for multiple URL formats:
  - Exact domain matches
  - Wildcard patterns (*.example.com)
  - Regular expressions
- Local file handling
- Responsive design
- Simple policy management (Allow/Deny)

## Usage

1. Open the website in your browser
2. Click "Load JSON File" to select your `UrlWhitelist.json` file
3. Add new policies using the form:
   - Enter the URL host (domain, wildcard, or regex pattern)
   - Select the policy type (Allow/Deny)
4. View and manage existing policies
5. Click "Save Changes" to download the updated configuration

## URL Format Examples

- Exact match: `example.com`
- Wildcard: `*.example.com`
- Regex: `^(www\.)?example\.com$`

## JSON Structure

```json
{
  "version": 1,
  "policies": [
    {
      "urlHost": "example.com",
      "policyType": "Allow"
    },
    {
      "urlHost": "*.example.com",
      "policyType": "Deny"
    }
  ]
}
```

## Made with:

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

## GitHub Pages

The CVR Whitelist Configurator is hosted on GitHub Pages. You can access it at:
[https://djshinter.github.io/CVRWhitelistConfigurator/](https://djshinter.github.io/CVRWhitelistConfigurator/)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
