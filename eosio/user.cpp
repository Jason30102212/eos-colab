#include "gameplay.cpp";

void user::login(name username) {
  // Ensure that this action is authorized by the user
  require_auth(username);

}

void user::register(name username) {

  // Create a record in the users table if the user doesn't exist in eos-colab yet
  auto user_iterator = _users.find(username.value);
  if (user_iterator == _users.end()) {
    user_iterator = _users.emplace(username, [&](auto& new_user){
      new_user.username = username;
    });
  }
}
